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
        description: "Full-stack application designed to help developers practice technical interviews with AI-driven feedback.",
        details: "A comprehensive platform that simulates real-world interview scenarios. It includes code editors, video sessions, and automated feedback mechanisms to improve interview readiness.",
        images: [
            "/projects/Mock-Interview-Platform/login.png",
            "/projects/Mock-Interview-Platform/Dashboard.png",
            "/projects/Mock-Interview-Platform/execution.png"
        ],
        architecture: ["React", "Node.js", "WebSockets", "AI Feedback"],
        highlights: [
            "Real-time collaborative code editor with syntax highlighting",
            "AI-integrated feedback system for technical accuracy",
            "Video/Audio streaming for realistic interview simulation"
        ],
        github: "https://github.com/Rahul-1611/mockInterviewPlatform",
        live: ""
    },
    {
        id: 5,
        title: "nsLookup Clone",
        description: "A specialized network utility for DNS querying and troubleshooting, built to replicate professional tools.",
        details: "Built as a high-performance network utility, this clone allows users to perform deep DNS lookups, verify records, and diagnose connectivity issues from a streamlined interface.",
        images: [
            "/projects/nsLookup-Clone/demo-nsLookupClone.png"
        ],
        architecture: ["C++/Go", "Networking", "DNS Protocol"],
        highlights: [
            "Fast recursive and iterative DNS query resolution",
            "Supports all major record types (A, AAAA, MX, TXT, CNAME)",
            "Detailed response analysis including TTL and Authoritative status"
        ],
        github: "https://github.com/Rahul-1611/nslookupClone",
        live: ""
    },
    {
        id: 6,
        title: "AeroCarbon",
        description: "Dashboard for monitoring and analyzing carbon footprints and environmental impacts of aeronautical operations.",
        details: "AeroCarbon provides a data-driven approach to tracking emissions. It aggregates flight data and calculates carbon offsets, providing actionable insights for sustainability initiatives.",
        images: [
            "/projects/AeroCarbon/Dashboard.png",
            "/projects/AeroCarbon/AeroCarbonDemo.png"
        ],
        architecture: ["React", "Data Visualization", "Environmental APIs"],
        highlights: [
            "Real-time carbon footprint calculation based on flight parameters",
            "Interactive data visualizations for trend analysis",
            "Exportable sustainability reports for regulatory compliance"
        ],
        github: "https://github.com/Rahul-1611/AEROCARBON",
        live: ""
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
        title: "Vocal Coin",
        description: "Cryptocurrency tracking and analysis platform featuring voice-driven navigation and alerts.",
        details: "Vocal Coin combines financial technology with voice recognition, allowing users to track their portfolios and set price alerts using natural language commands.",
        images: [
            "/projects/Vocal-Coin/VocalCoinDemo.png"
        ],
        architecture: ["React", "Voice Recognition API", "Crypto Exchange APIs"],
        highlights: [
            "Voice-activated portfolio tracking and market searches",
            "Real-time price updates for over 1000+ cryptocurrencies",
            "Secure encrypted wallet integration for personal holdings"
        ],
        github: "https://github.com/Rahul-1611/VocalCoin",
        live: ""
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
        description: "A lightweight Chrome extension that provides contextual productivity advice and mental wellness prompts.",
        details: "Designed to counteract digital fatigue, this extension surfaces timely advice and productivity hacks based on the user's browsing patterns and time spent on specific domains.",
        images: [
            "/projects/AdviceChromeExtension/desktop-design.jpg",
            "/projects/AdviceChromeExtension/mobile-design.jpg"
        ],
        architecture: ["Javascript", "Chrome Extension API", "HTML/CSS"],
        highlights: [
            "Context-aware productivity prompts based on active tabs",
            "Low-footprint background processing ensuring no browser lag",
            "Customizable advice categories including 'Wellness' and 'Technical Hacks'"
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
