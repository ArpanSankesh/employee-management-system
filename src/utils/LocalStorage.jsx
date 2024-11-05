const employees = [
  {
    Id: 1,
    name: "Amit",
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
        date: "31 October 2024",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue with user login not redirecting properly.",
        date: "25 October 2024",
        category: "dev"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update UI icons",
        description: "Replace old icons with updated versions.",
        date: "01 November 2024",
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
    name: "Priya",
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
        date: "30 October 2024",
        category: "dev"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy staging environment",
        description: "Deploy a new build to the staging environment for testing.",
        date: "28 October 2024",
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
    name: "Rajesh",
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
        date: "26 October 2024",
        category: "dev"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design login page",
        description: "Redesign the login page for a better user experience.",
        date: "01 November 2024",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write API documentation",
        description: "Document all REST API endpoints.",
        date: "27 October 2024",
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
    name: "Sneha",
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
        date: "29 October 2024",
        category: "dev"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "UI improvements",
        description: "Polish UI elements for better consistency.",
        date: "28 October 2024",
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
    name: "Anil",
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
        date: "02 November 2024",
        category: "dev"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database migration",
        description: "Migrate database schema to support new features.",
        date: "30 October 2024",
        category: "dev"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design system update",
        description: "Update the design system for consistent styles.",
        date: "01 November 2024",
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
  