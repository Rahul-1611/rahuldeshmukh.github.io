export const projects = [
    {
        id: 1,
        title: "DockerOpsAgent",
        description: "Conversational, LangGraph-powered assistant for Docker Hub tasks. It plans, checks risky actions, executes MCP tools, and summarizes outcomes — all from a simple CLI.",
        details: "DockerOpsAgent is a conversational assistant that uses LangGraph to handle Docker Hub tasks without requiring custom CLI scripts or manual UI navigation. When the user types a natural-language command into the terminal, the agent turns it into an ordered sequence of Docker operations, executes those operations through MCP tools running inside a Docker container, and returns a concise, human-readable result. Planning is handled by Gemini, and each node is orchestrated by LangGraph, producing a predictable and well-structured workflow for tasks like listing repositories, inspecting images, and checking usage metadata.",
        images: [
            "/projects/DockerOpsAgent/DockerOpsFlow.png"
        ],
        architecture: ["Langgraph", "Docker Hub MCP", "Gemini API", "Typscript MCP SDK"],
        highlights: [
            "Plans multi-step Docker Hub workflows and executes the right tools.",
            "Human-in-the-loop guardrails for create/update operations.",
            "Lightweight CLI with checkpointed threads so you can pause/resume.",
            "Structured logging for debugging (set LOG_LEVEL)"
        ],
        github: "https://github.com/Rahul-1611/DockerOpsAgent",
        live: "https://gmuedu-my.sharepoint.com/:v:/g/personal/rdeshmu_gmu_edu/IQDakrq8lYZhQYTcVQVJW5eyAQ3nGrbaKq5II4IupgZPyuI?e=QZgyud&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D"
    },
    {
        id: 2,
        title: "ShareSafely",
        description: "File sharing solution built to practice Azure's Node.js SDK and Azure Functions architecture",
        details: "ShareSafely is a secure, cloud-based file-sharing web application that enables users to upload files and generate time-limited sharing links. Built on Azure cloud infrastructure, this application demonstrates modern cloud engineering practices while providing a safe and efficient way to share files with automatic expiration capabilities. This project serves as a comprehensive implementation of Azure storage solutions, showcasing secure file handling, credential management, and automated cleanup processes.",
        images: [
            "/projects/ShareSafely/ShareSafelyDemo.png",
            "/projects/ShareSafely/ShareSafelyArch.png"
        ],
        architecture: ["Blob Storage", "Azure SDK", "Azure Functions", "React", "Azure Vault"],
        highlights: [
            "Enabled SAS-token based secure uploads to Blob Storage",
            "Configured Blob Storage cleanup policies",
            "Integrated Azure Managed Identities for RBAC authentication",
            "Functions for reducing VM costs"
        ],
        github: "https://github.com/Rahul-1611/ShareSafely",
        live: "https://share-safely.vercel.app/"
    },
    {
        id: 3,
        title: "VM Fleet Commander",
        description: "Implemented an IaC approach to provision and manage VMs in Azure, using ARM templates and Bicep.",
        details: "vmFleetCommander is an Infrastructure-as-Code (IaC) project using Bicep to provision Azure infrastructure. It supports multi-VM fleet deployments with reusable modules for VNet, NSG, and VM creation, as well as scripts and parameter files for automation and testing.",
        images: [
            "/projects/VM-Fleet-Commander/VMFleetArch.jpg"
        ],
        architecture: ["Bicep", "ARM", "Python", "Automation", "Monitoring"],
        highlights: [
            "Provisioned scalable Azure VM fleets using IaC with Bicep and ARM templates",
            "Built reusable Bicep modules for VNets, Network Security Groups, and parameterized VM deployments",
            "Automated multi-environment deployments with Azure CLI for reproducibility"
        ],
        github: "https://github.com/Rahul-1611/vmFleetCommander",
        live: ""
    },
    {
        id: 4,
        title: "Mock Interview Platform",
        description: "A peer-to-peer technical and behavioral interview practice platform featuring real-time matching and WebRTC-based video sessions.",
        details: "Built to simulate professional interview environments, this platform matches users based on shared preferences using the Jaccard similarity algorithm. It features a custom WebRTC implementation for low-latency video/audio communication, a collaborative code editor, and a library of questions scraped via Cheerio. Users can schedule sessions, conduct live interviews, and receive comprehensive performance reports based on peer feedback.",
        images: [
            "/projects/Mock-Interview-Platform/login.png",
            "/projects/Mock-Interview-Platform/Dashboard.png",
            "/projects/Mock-Interview-Platform/execution.png"
        ],
        architecture: ["WebRTC", "Node.js", "MongoDB", "EJS", "Cheerio", "REST API"],
        highlights: [
            "Implemented Jaccard similarity algorithm for intelligent peer matching",
            "Integrated WebRTC for real-time video, audio, and collaborative coding",
            "Automated question bank generation using Cheerio-based web scraping",
            "End-to-end interview lifecycle: scheduling, live execution, and peer-driven reporting"
        ],
        github: "https://github.com/Rahul-1611/mockInterviewPlatform",
        live: ""
    },
    {
        id: 5,
        title: "nsLookup Clone",
        description: "A lightweight DNS client implementation that performs domain name to IP address translation by directly communicating with DNS servers using the DNS protocol.",
        details: "This project implements a custom DNS client from scratch, handling the construction of DNS query messages and parsing responses. It communicates directly with DNS servers like Google's 8.8.8.8 over UDP, implementing the core DNS protocol logic without relying on high-level system libraries. It features a robust timeout-based retry mechanism and detailed Resource Record (RR) processing for accurate IP translation.",
        images: [
            "/projects/nsLookup-Clone/demo-nsLookupClone.png"
        ],
        architecture: ["C", "UDP", "DNS Protocol", "Socket Programming"],
        highlights: [
            "Custom DNS query message construction",
            "UDP-based communication with DNS servers",
            "Support for Google's public DNS (8.8.8.8)",
            "Timeout-based retry mechanism",
            "Detailed response parsing and display",
            "Resource Record (RR) processing"
        ],
        github: "https://github.com/Rahul-1611/nslookupClone",
        live: ""
    },
    {
        id: 6,
        title: "AeroCarbon",
        description: "Scope 3 emissions intelligence platform that uses a multi-agent AI pipeline to convert procurement invoices into real-time carbon insights.",
        details: "AEROCARBON transforms unstructured procurement data into measurable climate impact. Using a hybrid pipeline of Gemini 1.5 Flash and deterministic parsing, the system extracts line-item data from supplier invoices and maps them to auditable CO2e calculations. Organized around a three-agent architecture (OCR, Mapping, and Auditing), it eliminates 'estimation fog' by replacing industry averages with invoice-level activity data. The platform ensures full transparency with a structured audit lineage stored in Snowflake, tracking every transformation from raw document to final emission result.",
        images: [
            "/projects/AeroCarbon/Dashboard.png",
            "/projects/AeroCarbon/AeroCarbonDemo.png"
        ],
        architecture: ["FastAPI", "Gemini 1.5 Flash", "Snowflake", "React", "Python Agents"],
        highlights: [
            "Multi-Agent System: Dedicated OCR, Mapping, and Auditing agents for end-to-end data integrity",
            "AI-Powered Extraction: Leverages Gemini 1.5 Flash for semantic normalization of complex invoice layouts",
            "Traceable CO2e Metrics: Derived from real procurement behavior rather than opaque sector averages",
            "Snowflake Integration: Structured memory for raw documents, extraction logs, and audit lineage"
        ],
        github: "https://github.com/Rahul-1611/AEROCARBON",
        live: "https://aerocarbon.vercel.app/"
    },
    {
        id: 7,
        title: "nasaMCPServer",
        description: "A Model Context Protocol (MCP) server that interfaces with NASA's open APIs to provide space-related data to AI models.",
        details: "This server implements the MCP standard to allow AI agents (like Claude) to directly query NASA datasets, including APOD (Astronomy Picture of the Day), Mars Rover photos, and Near Earth Object data.",
        images: [
            "/projects/nasaMCPServer/Tools.png",
            "/projects/nasaMCPServer/Execution.png"
        ],
        architecture: ["TypeScript", "MCP SDK", "NASA Open APIs"],
        highlights: [
            "Implemented standard MCP tool definitions for space data retrieval",
            "Seamless integration with Claude Desktop and other MCP clients",
            "High-performance caching layer for NASA API responses"
        ],
        github: "https://github.com/Rahul-1611/nasaMcpServer",
        live: ""
    },
    {
        id: 8,
        title: "VocalCoin",
        description: "Innovative Expense Tracker that enables hands-free financial management using natural language voice commands.",
        details: "VocalCoin is a voice-first web application designed to simplify personal finance. Built with React and the Speechly SDK, it leverages complex state management through React Hooks (useContext, useReducer) to process and categorize spoken transactions in real-time. By integrating Speechly's NLP capabilities, the platform understands intents like 'Add income for $100 in category Business for last Monday', instantly updating the global state and providing a seamless, interactive user experience without manual typing.",
        images: [
            "/projects/Vocal-Coin/VocalCoinDemo.png"
        ],
        architecture: ["React", "Vite", "Speechly SDK", "Context API", "Material UI"],
        highlights: [
            "Voice-Driven NLU: Integrated Speechly for high-accuracy processing of complex financial intents",
            "Advanced Hooks Mastery: Utilized Context API and custom hooks for global state and voice synchronization",
            "Real-time Data Stream: Instant categorization and visualization of expenses as the user speaks",
            "PWA Ready: Optimized for quick mobile access and offline-first interactions"
        ],
        github: "https://github.com/Rahul-1611/VocalCoin",
        live: "https://vocalcoin.netlify.app/"
    },
    {
        id: 9,
        title: "Federated Learning Demo",
        description: "A showcase of privacy-preserving machine learning where models are trained across decentralized devices.",
        details: "This demo illustrates the lifecycle of a federated learning job, from server-side initialization to local model updates and global aggregation, ensuring data never leaves the client devices.",
        images: [
            "/projects/Federated-Learning-Demo/Start.jpeg",
            "/projects/Federated-Learning-Demo/Running.jpeg",
            "/projects/Federated-Learning-Demo/Training.jpeg",
            "/projects/Federated-Learning-Demo/Finished.jpeg",
            "/projects/Federated-Learning-Demo/Exception.jpeg"
        ],
        architecture: ["Python", "TensorFlow Federated", "Decentralized Systems"],
        highlights: [
            "Demonstrated secure model aggregation without data exposure",
            "Visualized local training progress across multiple simulated nodes",
            "Implemented robust error handling for edge-case connectivity issues"
        ],
        github: "https://github.com/Rahul-1611/Mobile-fl-app",
        live: ""
    },

    {
        id: 10,
        title: "AdviceChromeExtension",
        description: "A simple Chrome extension built to practice API integration and browser extension development.",
        details: "One of my early projects focused on learning how to interact with third-party APIs from the frontend. It fetches and displays random pieces of advice using a public API, providing a hands-on introduction to the Chrome Extension manifest and background scripts.",
        images: [
            "/projects/AdviceChromeExtension/desktop-design.jpg",
            "/projects/AdviceChromeExtension/mobile-design.jpg"
        ],
        architecture: ["JavaScript", "Chrome Extension API", "Fetch API", "HTML/CSS"],
        highlights: [
            "Integrated a public REST API to fetch real-time data",
            "Learned the fundamentals of Chrome Extension architecture and manifest files"
        ],
        github: "https://github.com/Rahul-1611/AdviceChromeExtension",
        live: ""
    },
    {
        id: 11,
        title: "FullStackDeployment via Rancher",
        description: "Distributed infrastructure training system used for large-scale Kubernetes deployments.",
        details: "This project showcases container orchestration at scale. It includes automated pipelines for deploying full-stack applications across heterogeneous environments using Rancher and Kubernetes.",
        images: [
            "/projects/FullStackDeployment/Rancher.png",
            "/projects/FullStackDeployment/LiveApp.png"
        ],
        architecture: ["Rancher", "Kubernetes", "Docker", "CI/CD", "Jenkins"],
        highlights: [
            "Configured multi-cluster management through Rancher",
            "Automated blue-green deployment strategies for zero downtime",
            "Implemented comprehensive cluster visibility and logging"
        ],
        github: "https://github.com/Rahul-1611/sweha3backend",
        live: "https://drive.google.com/drive/folders/18KatRHTqU0zd769EXcbx7avRNQXrrg3u?usp=sharing"
    }
];
