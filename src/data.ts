import { Project, Publication, Experience, EducationItem, SkillCategory, Organization } from './types';

export const PERSONAL_INFO = {
  name: 'Ahmad Rizal Miftah Awali Sofyan',
  shortName: 'Ahmad Rizal',
  title: 'Embedded Systems & Intelligent Sensing Engineer',
  summary: 'Hardware and Embedded Systems Engineer with expertise in PCB design, multi-voltage power distribution, and  embedded programming. Experienced in developing IoT devices, sensor-based systems, and concrete maturity sensors for industrial applications. Adept in bridging hardware and software for reliable field-ready solutions.',
  location: 'Bandung, West Java, Indonesia',
  email: 'ahmadrizal1162@gmail.com',
  github: 'https://github.com/Rizal890', 
  linkedin: 'http://www.linkedin.com/in/AhmadRizalMiftahAwaliSofyan', 
  researchGate: 'https://www.researchgate.net',
  resumeUrl: '#',
  metrics: [
    { value: '8+', label: 'Core Projects' },
    { value: '2+', label: 'Years Exp.' },
    { value: '30+', label: 'Sensors Utilized' },
    { value: '70+', label: 'Deployments' }
  ],
  specializations: [
    {
      title: 'PCB Design & Simulation',
      description: 'Architecting multi-layer, high-frequency circuits. Experts in signal integrity, thermal dissipation, power distribution networks, and DFM (Design for Manufacturability) guidelines using Altium and EasyEDA.',
      icon: 'Cpu'
    },
    {
      title: 'IoT Ecosystems & Gateway',
      description: 'Deploying robust industrial IoT telemetry loops. Specialized in RS485, Modbus, CAN Bus, and secure cloud sync with Firebase/MQTT broker hubs.',
      icon: 'Router'
    },
    {
      title: 'Sensor Fusion & Controls',
      description: 'Implementing advanced real-time math such as Kalman filtering, Complementary filters, and PID control loops on IMUs, high-precision thermal PT100s, and radar sensors.',
      icon: 'Compass'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'bldc-controller',
    title: 'BLDC Motor Speed Controller & IoT Diagnostic System',
    category: 'Control Systems & IoT',
    description: 'Design Controller BLDC Motor with IoT Monitoring System',
    longDescription: 'BLDC Motor Speed Controller and IoT Diagnostic System for Electric Vehicles Developed a BLDC motor speed control system for electric vehicle applications, focusing on energy efficiency and responsive operation under varying load conditions. The system was tested on a 500 W, 48 V BLDC motor integrated into an electric vehicle prototype and designed to support motors up to 1 kW with operating voltages of up to 72 V. The controller utilizes real-time speed feedback and 6-step PWM commutation to achieve stable and adaptive motor performance. An integrated IoT diagnostic platform provides real-time monitoring of battery level, voltage, current, temperature, and regenerative braking status. System data is transmitted through CAN Bus communication and uploaded to Google Firebase via HTTP for remote monitoring and diagnostics. As the sole developer, I was responsible for the complete development process, including electronic hardware design, PCB development, firmware implementation, CAN Bus integration, IoT communication, Android application development, and system validation.',
    image: 'https://drive.google.com/file/d/1ER7dSnsk9ro0dWy_RaNlZCNebz7QC_Nm/view?usp=sharing',
    videoUrl: 'https://drive.google.com/file/d/1BkSWI9UxZOiwfY5z89aYxDedzPGpHFZu/view?usp=sharing', // Demo video placeholder for full functional preview
    metrics: [
      { label: 'Rating', value: '500 W' },
      { label: 'IoT Monitoring', value: 'Available' },
      { label: 'Telemetry', value: 'CAN Bus' }
    ],
    tags: ['Arduino IDE(C/C++)', 'EasyEDA', 'LTspice', 'Kodular', 'CAN Bus', 'Google Firebase', 'Embedded Systems', 'IoT', 'BLDC Motor Control.'],
    details: [
      'Designed and developed firmware for a BLDC motor speed controller supporting motors up to 1 kW / 72 V.',
      'Implemented 6-step PWM commutation and real-time speed feedback control.',
      'Developed an IoT diagnostic system for monitoring voltage, current, temperature, battery status, and regenerative braking.',
      'ntegrated CAN Bus communication between the motor controller and IoT device.',
      'Developed an Android-based monitoring application with cloud connectivity through Google Firebase.'
    ],
    achievements: [
      'Developed and validated a BLDC motor controller supporting up to 1 kW and 72 V operation',
      'Implemented cloud-connected monitoring systems using Firebase and HTTP communication.',
      'Designed Android-based monitoring and diagnostic applications.',
      'Developed embedded communication architectures using CAN Bus.'
    ]
  },
  {
    id: 'agv-navigation',
    title: 'Automated Guided Vehicle (AGV)',
    category: 'Robotics & Automation',
    description: 'Heavy payload industrial automatic vehicle combining magnetic guidance and Ultrasonic safety.',
    longDescription: 'Automated Guided Vehicle (AGV) for Factory Logistics Automation Developed an Automated Guided Vehicle (AGV) to support internal logistics automation in manufacturing environments, with a payload capacity of up to 750 kg. The vehicle utilizes a magnetic line navigation system to enable precise and reliable movement between production areas and warehouse facilities. To ensure operational safety, the AGV is equipped with obstacle avoidance capabilities and multiple safety sensors for detecting potential hazards during operation. The system was designed with a modular architecture, allowing future integration with higher-level industrial automation platforms such as Warehouse Management Systems (WMS). This approach provides flexibility for future expansion and supports the growing demand for smart factory solutions. My primary responsibility in this project was the development and testing of the AGV firmware, particularly the implementation of the magnetic line-following algorithm and navigation logic. I was responsible for ensuring stable sensor readings, accurate path tracking, and reliable vehicle behavior under different operating conditions. The development process involved tuning control parameters and validating system performance through repeated field testing. One of the main challenges encountered was the limited maneuverability caused by the dual DC motor drive configuration, which resulted in relatively rigid movement and larger turning radius requirements. Addressing this issue required optimization of the control logic to improve navigation accuracy while maintaining system stability and safety. Through this project, I gained practical experience in embedded system development, industrial automation, sensor integration, and real-time control systems for autonomous ground vehicles.',
    image: 'https://drive.google.com/file/d/1-GzxlZ0yqKA7OQZgwRbEJFNV-1ajofYX/view?usp=sharing',
    videoUrl: 'https://drive.google.com/file/d/17f5uvnkhcTz_OszQxD6VOJ0hNvock9-W/view?usp=sharing',
    metrics: [
      { label: 'Capacity', value: 'up to 750 kg' },
      { label: 'Sensing', value: 'Ultrasonic' },
      { label: 'Accuracy', value: '< 20mm' }
    ],
    tags: ['Arduino IDE (C/C++)', 'Arduino', 'Magnetic Line Sensors', 'DC Motors', 'Embedded Systems', 'Industrial Automation', 'Sensor Integration'],
    details: [
      'Developed embedded firmware for a 750 kg payload AGV using magnetic-line navigation.',
      'Implemented and optimized line-following algorithms for industrial environments.',
      'Integrated safety and obstacle detection functions into the vehicle control system.',
      'Conducted system tuning and field testing to improve navigation accuracy and reliability.',
      'Evaluated maneuverability limitations associated with dual DC motor drive architecture'
    ],
    achievements: [
      'Developed firmware for an AGV with 750 kg payload capacity using magnetic-line navigation.',
    ]
  },
  {
    id: 'self-charging-drone',
    title: 'Self-Charging Drone (Solar-Assisted UAV)',
    category: 'Aerospace & Energy Systems',
    description: 'Dynamic energy harvester drone maximizing flight persistence using lightweight solar arrays.',
    longDescription: 'Developed an adaptive energy management system for a UAV (Unmanned Aerial Vehicle) aimed at extending flight endurance through the integration of solar energy harvesting and a dual-battery architecture. The concept utilized two batteries operating alternately, where one battery supplied power to the drone while the other was recharged using a solar panel, with the goal of enabling longer and more sustainable flight operations. My primary responsibility was the design and implementation of the power management system, including the integration of dual batteries, solar charging circuitry, and relay-based battery switching control. The system was developed to support automated battery selection and energy distribution while maintaining continuous power delivery during flight. Battery switching logic was implemented using Arduino-based control, while drone operation and testing were conducted through Mission Planner. One of the main technical challenges involved maintaining stable charging and power distribution between the two batteries during flight. The project encountered limitations related to uneven load distribution and the complexity of integrating simultaneous charging and power delivery within a lightweight UAV platform. Although a complete solution was not achieved before the project concluded, the development process provided valuable experience in power electronics, energy management systems, UAV integration, and system-level engineering trade-offs. This project served as an exploratory platform for sustainable UAV operations and highlighted the practical challenges associated with implementing renewable energy sources in autonomous aerial systems.',
    image: 'https://drive.google.com/file/d/1WyqqLPxnS1yZh1aK1wx61IHqg4a_URK4/view?usp=sharing',
    videoUrl: 'https://drive.google.com/file/d/1_xDBLonRUWY7vW4UU1IgEZwxPN3N2yaW/view?usp=sharing',
    images: [
      'https://drive.google.com/file/d/1uvHI8rErALlmAhutaw6uM5wmjtFz4R9T/view?usp=sharing',
      'https://drive.google.com/file/d/1WyqqLPxnS1yZh1aK1wx61IHqg4a_URK4/view?usp=sharing'
    ],
    videoUrls: [
      'https://drive.google.com/file/d/1_xDBLonRUWY7vW4UU1IgEZwxPN3N2yaW/view?usp=sharing'
    ],
    metrics: [
      { label: 'COntrol', value: 'ArduPilot' },
      { label: 'System', value: 'Dual Bat' },
      { label: 'Dynamic Charging System', value: 'Solar' }
    ],
    tags: ['Arduino IDE (C/C++)', 'Mission Planner', 'Relay-Based Power Switching', 'Solar Panels', 'Battery Management', 'Embedded Systems', 'UAV Systems'],
    details: [
      'Designed a dual-battery power management architecture for UAV applications.',
      'Developed relay-based battery switching control using Arduino.',
      'Integrated solar charging functionality for energy harvesting experiments.',
      'Conducted system testing and evaluation of battery charging and power distribution strategies.',
      'Investigated challenges related to simultaneous charging and power delivery during flight operations.'
    ],
    achievements: [
      ''
    ]
  },
  {
    id: 'ev-platform',
    title: 'Electric Vehicle',
    category: 'EV Systems',
    description: 'Advanced power optimization and BMS diagnostic framework for a 2 kW EV prototype.',
    longDescription: 'Contributed to the development of an electric vehicle prototype designed as a research platform for energy-efficient transportation, powered by a 2 kW, 48 V BLDC motor. The project focused on the integration of the motor system, controller, and Battery Management System (BMS) into a compact and modular vehicle architecture suitable for experimentation and performance evaluation. My primary responsibility was the optimization of the commercial motor controller used in the vehicle. This involved tuning controller parameters and evaluating system performance to achieve improved power delivery, responsiveness, and overall driving efficiency. Through iterative testing and analysis, the controller configuration was refined to better match the vehicles operating characteristics and performance requirements. The vehicle served as a test platform for studies related to electric drive systems, energy efficiency, and PWM-based speed control. Both static and dynamic testing were conducted to assess motor performance, vehicle response, and system reliability under various operating conditions. The modular design also enabled experimentation with different motor configurations and load scenarios. In addition to its research value, the prototype provided a foundation for the development of vehicles intended for participation in national electric vehicle competitions, while supporting further exploration of electric mobility technologies.',
    image: 'https://drive.google.com/file/d/1YPpQyu7YT2GppEvosKBckvVG81_ZhpXd/view?usp=sharing',
    metrics: [
      { label: 'Motor Power', value: '2 kW' },
      { label: 'Battery Voltage', value: '48V' }
    ],
    tags: ['BLDC Motor Systems', 'Motor Controller Tuning', 'PWM Speed Control', 'Battery Management Systems (BMS)', 'Electric Vehicle Systems', 'Performance Testing', 'Data Analysis'],
    details: [
      'Optimized commercial motor controller parameters for a 2 kW, 48 V BLDC electric vehicle.',
      'Performed static and dynamic testing to evaluate vehicle performance.',
      'Analyzed controller behavior under different operating and loading conditions.',
      'Supported integration of the motor system, controller, and Battery Management System (BMS).',
      'Contributed to the development of a research platform for electric vehicle experimentation and competitions.'
    ],
    achievements: [
      'Optimized commercial motor controllers for a 2 kW, 48 V electric vehicle platform.'
    ]
  },
  {
    id: 'unmanned-ev',
    title: 'Unmanned Electric Vehicle (UEV)',
    category: 'Autonomous Systems',
    description: 'Drive-by-wire patrol vehicle with LiDAR, ultrasonic arrays, and an interactive touch panel.',
    longDescription: 'Developed as part of an internship program at BRIN (National Research and Innovation Agency of Indonesia), this project explored the feasibility of unmanned electric vehicle technologies for future smart mobility applications. The prototype was designed as a low-cost autonomous vehicle platform integrating a touchscreen-based user interface, BLDC motor drive system, LiDAR and ultrasonic sensors for obstacle detection, and a camera-based vision system for environmental awareness. The platform served as a research testbed for evaluating sensor-based safety functions and autonomous vehicle technologies. By combining rule-based control with real-time sensor inputs, the system aimed to improve operational safety and responsiveness while maintaining a simple and cost-effective architecture. My primary responsibility was the development of the BLDC motor control firmware and the touchscreen-based control interface. In addition, I implemented the obstacle avoidance safety system using LiDAR and ultrasonic sensors. At the current stage of development, these sensors were utilized to detect obstacles and automatically stop the vehicle when necessary. The system did not perform path replanning or autonomous route adjustment, making it a foundational safety feature rather than a fully autonomous navigation solution. Through this project, I gained practical experience in embedded systems, human-machine interfaces (HMI), sensor integration, and safety-oriented control systems for autonomous ground vehicles. The project also provided valuable insights into the challenges and future opportunities in sensor fusion, human detection, and autonomous navigation technologies.',
    image: 'https://drive.google.com/file/d/1xQ52QQGsCKOT1z2crd5JsLeEV4lFVMHc/view?usp=sharing',
    metrics: [
      { label: 'Safety Sensor', value: 'LiDAR & Ultrasonic' },
      { label: 'Display', value: 'HMI Touch' }
    ],
    tags: ['Arduino IDE (C/C++)', 'LiDAR', 'Ultrasonic Sensors', 'Touchscreen HMI', 'BLDC Motor Control', 'Embedded Systems', 'Autonomous Vehicles', 'Sensor Integration'],
    details: [
      'Developed firmware for touchscreen-based vehicle control and user interaction.',
      'Implemented BLDC motor control functions for autonomous vehicle operation.',
      'Integrated LiDAR and ultrasonic sensors for obstacle detection and automatic vehicle stopping.',
      'Conducted sensor calibration and system testing for safety validation.',
      'Supported the development of a low-cost autonomous mobility research platform.'
    ],
    achievements: [
      'Implemented obstacle detection and safety systems using LiDAR and ultrasonic sensors.',
      'Developed control firmware for a low-cost autonomous electric vehicle research platform at BRIN.'
    ]
  },
  {
    id: 'pick-to-light',
    title: 'Pick-to-Light Smart Warehouse System',
    category: 'Logistics IoT',
    description: 'Decentralized IoT picking solution optimizing sorting speeds in storage facilities.',
    longDescription: 'Developed a prototype Pick-to-Light System designed to improve the efficiency and accuracy of material handling processes in warehouse environments, supporting both production and distribution activities. The project was carried out as a collaborative initiative between Hanbat National University and Telkom University in 2023, aiming to demonstrate a smart warehouse solution that integrates hardware, firmware, and software components. The system was designed to guide operators during material picking processes through visual indicators, reducing the likelihood of human error and improving operational efficiency. Communication between devices and the central database was implemented through the HTTP protocol, enabling real-time data exchange and synchronization across the system. As part of the Telkom University team, I contributed to the development of the hardware and firmware architecture. My responsibilities included designing and implementing embedded firmware, integrating communication modules, and ensuring reliable connectivity between the hardware devices and the cloud database. A key objective was to guarantee stable data transmission and seamless interaction between the physical system and the software platform. The Android application was developed by the Hanbat National University team, while the Telkom University team focused on ensuring that the embedded devices could effectively communicate with the backend infrastructure and support the overall warehouse management workflow. Through this project, I gained practical experience in IoT system integration, embedded firmware development, cloud-based communication, and collaborative international research projects.',
    image: 'https://drive.google.com/file/d/1Rv4lYmEW7LV7m-HEScIaknc5_8dBF7WU/view?usp=sharing',
    videoUrl: 'https://drive.google.com/file/d/1qNKNTIBp6_BP6ShR-kYRmI07LyA-jFbS/view?usp=sharing',
    images: [
      'https://drive.google.com/file/d/1Rv4lYmEW7LV7m-HEScIaknc5_8dBF7WU/view?usp=sharing'
    ],
    videoUrls: [
      'https://drive.google.com/file/d/1Bper719SslX0ZdzUINNzUF0EmvPaUqo9/view?usp=sharing',
      'https://drive.google.com/file/d/1qNKNTIBp6_BP6ShR-kYRmI07LyA-jFbS/view?usp=sharing'
    ],
    metrics: [
      { label: 'Nodes Prototype', value: '9 Nodes' },
      { label: 'Protocol', value: 'HTTP' }
    ],
    tags: ['Arduino IDE (C/C++)', 'HTTP Protocol', 'Database Integration', 'Embedded Systems', 'IoT Communication', 'Smart Warehouse Systems'],
    details: [
      'Developed firmware for smart warehouse pick-to-light devices.',
      'Implemented communication between embedded devices and cloud databases using HTTP protocols.',
      'Integrated hardware modules for real-time warehouse operation support.',
      'Ensured reliable data synchronization between embedded devices and backend systems.',
      'Participated in an international collaborative project between Telkom University and Hanbat National University.'
    ],
    achievements: [
      ''
    ]
  },
  {
    id: 'structural-health',
    title: 'Bridge Structural Health Monitoring System',
    category: 'Intelligent Sensing',
    description: 'Robust, wide-ranging 10-type sensor logging terminal recording mechanical micro-strains in bridges.',
    longDescription: 'Contributed to the development of a Structural Health Monitoring (SHM) system for bridges across Indonesia, aimed at providing continuous real-time monitoring to support predictive maintenance strategies and improve infrastructure safety. The system was designed to collect critical structural and environmental data, enabling engineers and researchers to assess bridge conditions and evaluate long-term structural performance under varying operational and environmental conditions. The monitoring platform integrates 10 different sensor types to measure key parameters such as structural vibration, strain, cable movement, displacement, temperature, humidity, and wind conditions. These sensors include accelerometers, tiltmeters, LVDTs, strain gauges, temperature sensors, ATRH sensors, cable tension accelerometers, bi-axial and tri-axial anemometers, and strain gauge rosettes. The collected data supports both maintenance decision-making and research on the dynamic behavior of bridge structures across diverse geographical and climatic regions. My primary responsibility was the electronic hardware design for each sensing unit deployed within the monitoring system. This included schematic design, PCB development, sensor interface design, signal conditioning considerations, and ensuring reliable operation in outdoor monitoring environments. The work required accommodating various sensor characteristics and measurement requirements while maintaining compatibility with the overall SHM architecture. Through this project, I gained experience in sensor electronics, instrumentation systems, PCB design, signal acquisition, and the development of monitoring solutions for large-scale civil infrastructure applications.',
    image: 'https://drive.google.com/file/d/1nr8TS5AkCiW1bxeALCBszQqmsv7PhJMa/view?usp=sharing',
    metrics: [
      { label: 'Sensors', value: '10 Types' },
      { label: 'Resolution', value: '24-bit ADC' },
      { label: 'Enclosure', value: 'IP67 Metal' }
    ],
    tags: ['EasyEDA', 'PCB Design', 'Instrumentation Systems', 'Structural Health Monitoring (SHM)', 'Embedded Hardware Development'],
    details: [
      'Designed electronic hardware and PCB layouts for multiple structural monitoring sensors.',
      'Performed signal conditioning and measurement system design for long-term monitoring applications.',
      'Supported integration of 10 sensor types into a unified monitoring platform.',
      'Contributed to infrastructure monitoring systems for predictive maintenance and structural analysis.'
    ],
    achievements: [
      ''
    ]
  },
  {
    id: 'transformer-health',
    title: 'Transformer Health Monitoring System',
    category: 'Industrial IoT & Energy',
    description: 'Modbus industrial Distribution Transformer Healt Monitoring',
    longDescription: 'Contributed to the development and deployment of a Transformer Health Monitoring System (THMS) designed for continuous condition monitoring of distribution transformers. The system enables real-time monitoring of critical operational parameters, supporting predictive maintenance strategies and early fault detection to improve transformer reliability and reduce unplanned downtime. The monitoring unit was installed inside distribution transformer housings and equipped with multiple sensing channels, including 4 voltage measurement channels, 8 current measurement channels, and 5 temperature channels using PT100 temperature sensors. Measurement data is transmitted to a web-based monitoring platform via an internet connection, while communication with peripheral devices is handled through RS485 communication. My primary responsibility was the complete electronic hardware design of the sensing and monitoring modules. This included schematic development, PCB design, sensor interfacing, signal conditioning circuits, and ensuring reliable operation in industrial power-distribution environments. The system was designed to provide accurate measurements while maintaining robustness against electrical noise and field operating conditions. The project successfully progressed beyond the prototype stage and has been deployed in more than 70 distribution transformer units across Banten and Lampung, Indonesia, providing continuous operational data for maintenance and asset management purposes. Through this project, I gained practical experience in industrial electronics design, instrumentation systems, power-system monitoring, sensor integration, RS485 communication, and large-scale field deployment of IoT-enabled monitoring solutions.',
    image: 'https://drive.google.com/file/d/1fAYNNqpINxCNoz3zbHjLltEtFDDT0lSN/view?usp=sharing',
    images: [
      'https://drive.google.com/file/d/1fAYNNqpINxCNoz3zbHjLltEtFDDT0lSN/view?usp=sharing',
      'https://drive.google.com/file/d/1g33WbdguFUsOjmNuE37fKLn241ZqiGNh/view?usp=sharing',
      'https://drive.google.com/file/d/1_ZEi6PTr1UYK_Zc2FIJsXcrnq9GA--CR/view?usp=sharing'
    ],
    metrics: [
      { label: 'Deployments', value: '70+ units' },
      { label: 'Protocol', value: 'Modbus RTU' }
    ],
    tags: ['EasyEDA', 'PCB Design', 'PT100 Sensors', 'RS485 Communication', 'Industrial Instrumentation', 'Power System Monitoring', 'Embedded Hardware Development', 'IoT Monitoring Systems'],
    details: [
      'Designed complete electronic hardware for transformer monitoring devices.',
      'Developed sensing circuits for 4 voltage channels, 8 current channels, and 5 PT100 temperature channels.',
      'Implemented RS485 communication for industrial device connectivity.',
      'Supported internet-based telemetry and web monitoring functionality.',
      'Contributed to a monitoring platform successfully deployed on 70+ distribution transformers in Banten and Lampung.'
    ],
    achievements: [
      ''
    ]
  }
];

export const PUBLICATION: Publication = {
  title: 'Trajectory Tracking of a Pioneer P3DX Robot Using Model Predictive Control-Final Draft Submitted',
  authors: 'Azam Zamhuri Fuadi, Ahmad Rizal Miftah Awali Sofyan, Angga Rusdinar',
  venue: 'Academic Research Paper / System Control Journal',
  year: 'Not Published Yet',
  doi: 'Not Available yet',
  abstract: 'Trajectory tracking of nonholonomic mobile robots using Model Predictive Control (MPC) has attracted significant attention due to its capability to explicitly handle system dynamics and actuator constraints within an optimization framework. However, limited studies specifically investigate the computational consistency of constrained Nonlinear Model Predictive Control (NMPC) under fixed-sampling closed-loop simulation environments. This study presents the implementation of a constrained NMPC framework for trajectory tracking of a Pioneer P3DX differential-drive robot using a discrete-time kinematic model and Sequential Least Squares Quadratic Programming (SLSQP) optimization. The controller is integrated with the CoppeliaSim environment through a ZeroMQ based communication interface operating at a fixed sampling time of 0.1 s. Controller performance is evaluated using circular, lemniscate, and square reference trajectories to analyze predictive behavior under varying curvature conditions. The simulation results demonstrate cumulative Root Mean Square Error (RMSE) values of 0.3868 m for the circular trajectory, 0.0942 m for the lemniscate trajectory, and 0.4911 m for the square trajectory. In the square trajectory case, the controller autonomously reduces linear velocity before sharp corners and generates smooth feasible turning maneuvers while satisfying actuator constraints. These behaviors indicate that the implemented NMPC framework is capable of maintaining stable and constraint-aware trajectory tracking performance within a structured closed-loop simulation environment. The study therefore provides a preliminary validation of computational feasibility prior to hardware level implementation.',
  highlights: [
    'Model Predictive Control', 'NMPC', 'SLSQP', 'Trajectory Tracking', 'Pioneer P3DX', 'CoppeliaSim.'
  ],
  pdfUrl: '#',
  citation: 'Not Available Yet'
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'R&D IoT Engineer',
    company: 'PT Langgeng Cipta Solusi',
    period: '2025 – Present',
    description: 'Lead engineer piloting smart instrumentation systems, high-durability sensor devices, and localized industrial controllers.',
    bullets: [
      'Developed new Structural Health Monitoring System (SHMS) devices, encompassing 10 distinct types of sensor units',
      'Implemented a comprehensive SHMS at the Sei Wampu Bridge, North Sumatra, deploying 30+ sensors integrated with a real-time webbased data interface',
      'Engineered and produced two variants of concrete maturity sensors tailored to meet the technical field requirements of PT Semen IndoGreen Sentosa and PT Hutama Karya',
      'Designed and deployed specialized PCBs for 3-phase Power House Monitoring in electrical substations, enhancing system stability anddata acquisition accuracy',
      'Led the development of a Warehouse Volume Capacity Monitoring System, specifically optimized for food ingredient and raw materialstorage.'
    ],
    skills: ['PCB Design',  'FreeRTOS', 'Sensor Fusion']
  },
  {
    role: 'Engineer / Integration Specialist',
    company: 'PT Sarana Komunikasi Data',
    period: '2024 – 2025',
    description: '',
    bullets: [
      'Developed a new products for support every customer needed around ICT industries sector',
      'Conduct some survey and staging devices before running the project',
      'Installing telecommunication and power system devices'
    ],
    skills: []
  },
  {
    role: 'Internship Research Assistant',
    company: 'National Research and Innovation Agency (BRIN)',
    period: '2023',
    description: 'Conducted engineering studies and hardware simulations for autonomous unmanned vehicle (UAV) safety parameters.',
    bullets: [
      'Built out the system control for prototype unmanned electric vehicle using microcontroller including the Circuit Design, and PCB design for integrating all the systems and build the 3D design for gearbox and Heatsink.'
    ],
    skills: []
  }
];

export const EDUCATION: EducationItem = {
  degree: 'Bachelor of Engineering (B.Eng.) in Electrical Engineering',
  institution: 'Telkom University',
  gpa: '3.60',
  lab: 'Electronics & Embedded Systems Research Lab',
  period: '2020 – 2024',
  details: [
    'Project Leader and Research Assistant in INACOS Laboratory 2022/2024.',
    'Undergraduate Thesis : Design of a 500 Watt BLDC Motor Controller for an Electric Vehicle Prototype at the INACOS Laboratory',
    'Project Experiences : AGV(Automated Guided Vehicle) for Warehouse, Picking to Light System for Warehouse and Self-charging Drone',
    'Relevant Courses : Switching Power Supply Control Systems, IoT Programming, Robotics, Microcomputers, Embedded System Design, Electronics, Electric Circuit, Machine Learning, Artificial Intelligence and Renewable Electric Energy System.'
  ]
};

export const ORGANIZATIONS: Organization[] = [
  {
    role: 'Laboratory Assistant',
    name: 'INACOS Laboratory',
    location: 'Bandung',
    period: '2022 – 2024',
    bullets: [
      'Leading the team for preparation the International Research Collaboration with Hanbat National University with 73 student participants and 18 professor from Indonesia and South Korea.',
      'Managing 2 research around AGV (Automated Guided Vehicle) for Warehouse, and Self Charging Drones.',
      'Initiate Picking to Light system for warehouse Project.',
      'Conducting research on Electric Vehicle Speed Controller Systems for my Final Project as a Telkom University student.',
      'Developing a 2 Electric Vehicle for competitions.',
      'Analyzing mechanical parts on Electric vehicles car, especially the braking system and design the braking systems.',
      'Analyzing systems on Electric vehicles car, especially the controller.'
    ]
  },
  {
    role: 'Head of Education and Research Department',
    name: 'IEEE SB Telkom University',
    location: 'Bandung',
    period: 'Jan 2022 – Dec 2022',
    bullets: [
      'Managed to develop event for education and certification.',
      'Collaborated with other department to manage some national events.',
      'Create 3 National events such as webinars, talk show and workshop and get more than 100 participant on each event.'
    ]
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Python', 'MATLAB', 'Assembly (ARM)']
  },
  {
    title: 'Embedded Hardware',
    skills: ['ESP32', 'Arduino Core', 'Sensor Interfacing (SPI, I2C, UART, ADC)']
  },
  {
    title: 'Electronics Design',
    skills: ['Multi-layer PCB Routing (Altium Designer, EasyEDA)', 'LTspice Circuit Simulation', 'Power Electronics Buck/Boost Convergence']
  },
  {
    title: 'Communication & Protocols',
    skills: ['CAN Bus Telemetry', 'RS485 Differential Comms', 'Modbus RTU', 'UART, SPI, I2C Bus Diagnostics', 'BLE Local Sync', 'MQTT']
  },
  {
    title: 'IoT Cloud',
    skills: ['Firebase Realtime Database', 'MQTT Broker Systems', 'HTTP REST Endpoints', 'Data Logger Architecture']
  }
];
