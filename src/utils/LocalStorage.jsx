const employees = [
  {
    Id: 1,
    name: "Amit Sharma",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design new homepage",
        description: "Create a responsive design for the new homepage layout.",
        date: "2024-10-31",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue with user login not redirecting properly.",
        date: "2024-10-25",
        category: "dev"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update UI icons",
        description: "Replace old icons with updated versions.",
        date: "2024-11-01",
        category: "design"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    Id: 2,
    name: "Priya Mehta",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize backend queries",
        description: "Improve database query performance for faster load times.",
        date: "2024-10-30",
        category: "dev"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy staging environment",
        description: "Deploy a new build to the staging environment for testing.",
        date: "2024-10-28",
        category: "dev"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    Id: 3,
    name: "Rajesh Kumar",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Setup monitoring tools",
        description: "Implement monitoring for server health.",
        date: "2024-10-26",
        category: "dev"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design login page",
        description: "Redesign the login page for a better user experience.",
        date: "2024-11-01",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write API documentation",
        description: "Document all REST API endpoints.",
        date: "2024-10-27",
        category: "dev"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    }
  },
  {
    Id: 4,
    name: "Sneha Iyer",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create test cases",
        description: "Develop test cases for new features.",
        date: "2024-10-29",
        category: "dev"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "UI improvements",
        description: "Polish UI elements for better consistency.",
        date: "2024-10-28",
        category: "design"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    Id: 5,
    name: "Anil Reddy",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Bug fixing spree",
        description: "Tackle the backlog of minor UI bugs.",
        date: "2024-11-02",
        category: "dev"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database migration",
        description: "Migrate database schema to support new features.",
        date: "2024-10-30",
        category: "dev"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design system update",
        description: "Update the design system for consistent styles.",
        date: "2024-11-01",
        category: "design"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  }
];

  
  const admin = [
    {
      Id: 101,
      email: "admin@example.com",
      password: "123"
    }
  ];

  
  export const setLocalStorage = () => {
    localStorage.setItem("employee", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin")) 
    return { employees, admin };
  };
  