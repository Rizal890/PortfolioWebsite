import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Start of Server-Side Configuration
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array to log contact messages if needed in real time for research panel
const contactLogs: any[] = [];

// API: Health probe
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API: Handle portfolio contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all diagnostic fields.' });
  }

  const logEntry = {
    id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  contactLogs.push(logEntry);
  console.log(`[Diagnostic Telemetry Received]: ${JSON.stringify(logEntry)}`);

  return res.json({
    success: true,
    message: 'Message telemetry transmitted successfully.',
    log: logEntry
  });
});

// Lazy initialize GoogleGenAI securely to avoid startup crashes if key is omitted
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      throw new Error('GEMINI_API_KEY environment variable is not set or configured.');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// API: Intelligent Sensing & Recruitment Compatibility Assistant
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message body cannot be empty.' });
    }

    const client = getAiClient();

    // Embed rich context guidelines inside systemInstruction so the model serves as an excellent portfolio Q&A representative
    const systemInstruction = `
You are the Intelligent Sensing & Recruitment Compatibility Assistant for Ahmad Rizal Miftah Awali Sofyan, an exceptional Embedded Systems & Intelligent Sensing Engineer.
Ahmad Rizal is an Electrical and IoT Engineer seeking advanced Master's and PhD programs, plus high-stakes research roles/deep tech startup jobs.

Details about Ahmad Rizal:
- Current Title: Embedded Systems & Intelligent Sensing Engineer
- Core Expertise: PCB Design, Sensor Integration, Industrial IoT systems, Control Systems, Power Electronics, Sensor Fusion, Real-time telemetry, Human-Machine Interaction (HMI).
- Research Interests: Embedded AI (TinyML), Wearable Sensing Systems, Sensor Fusion (Kalman filtering), Radar-Based sensing, Rehabilitation/Assistive devices for healthy aging, autonomous robotics.
- Education: Bachelor of Engineering (B.Eng.) in Electrical Engineering from Telkom University with a high Cumulative GPA of 3.60. Served as a research assistant in the Electronics & Embedded Systems Lab.
- Selected Projects:
  1. BLDC Motor Speed Controller & IoT Diagnostic System (500W FOC, STM32, CAN Bus, Firebase, Altium PCB).
  2. Automated Guided Vehicle (AGV) supporting a 750 kg payload utilizing ROS2, magnetic line trace, and 2D LiDAR.
  3. Self-Charging Solar Drone featuring active dual-battery power harvesting and MPPT circuit controls.
  4. Electric Vehicle Platform: 2 kW BLDC motor powertrain, active BMS optimization simulation.
  5. Unmanned Electric Vehicle (UEV): obstacle-mapping robot with LiDAR sweeps, ultrasonic arrays, Nextion touchscreen HMI.
  6. Pick-to-Light Smart Warehouse: addressing modular display panels via daisy-chained physical RS485 lines.
  7. Bridge Structural Health Monitoring (SHM) integrating 10 physical sensors with ultra-fine strain gauge ADCs.
  8. Transformer Health Monitoring terminal deployed 70+ times in electric substations with Modbus RTU PT100 sensors.
- Highlight Publication: "Trajectory Tracking of a Pioneer P3DX Robot Using Model Predictive Control" (incorporating NMPC modeling, optimization, and CoppeliaSim physics validation).
- Professional History:
  - PT Langgeng Cipta Solusi (R&D IoT Engineer, 2025-Present): Leading industrial instrumentation, concrete curing sensors.
  - PT Sarana Komunikasi Data (Electrical Engineer, 2024-2025): Deployed RTU telemetry, surge protection, Modbus SCADA alignment.
  - National Research and Innovation Agency BRIN (Research Intern, 2023): Solar charging backups for UAV study.

Your Objectives:
- Act extremely professional, humble, objective, and highly technical. Talk like a seasoned research adviser or senior hardware engineering consultant.
- Highlight Ahmad's dual strengths: deep direct industrial field deployment experience (70+ active substation units), and a highly mathematical, control-systems design background (NMPC publications, Kalman filtering).
- Maintain concise, highly scannable answers. Use short paragraphs and clear bullet points.
- If recruiters or professors ask about fit for their specific team (e.g. "Is Ahmad Rizal suitable for a robotics lab?", "Does he have experience with PCB layout?", "Would he fit a PhD in wearable healthcare?"), analyze their query against Ahmad's credentials and give a highly persuasive, factual analysis demonstrating how his skills map perfectly.
`;

    // Map history to Google GenAI structure if provided, or simply construct a targeted generation
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        });
      });
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await client.models.generateContent({
      model: 'gemini-3.5-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({
      text: response.text || 'Assistant encountered a status frame issue. Please try again.',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('[Gemini API Server Error]:', error);
    return res.status(500).json({
      error: 'Inquiry telemetry disrupted.',
      details: error.message || 'Verification key invalid or busy.'
    });
  }
});

// Vite Middleware & Static Asset Management Setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SYSTEM STARTED] Port: ${PORT} | Host: 0.0.0.0`);
  });
}

startServer();
