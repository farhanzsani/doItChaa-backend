import path from 'path';
import { Express, RequestHandler } from 'express';

const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Do It Cha API',
    version: '1.0.0',
    description:
      'REST API for Do It Cha â€” a productivity app with personal task management and amigurumi price estimation.',
    contact: { name: 'Do It Cha' },
  },
  servers: [
    { url: '/api', description: 'API Base URL' },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT token. Get one from POST /auth/login.',
      },
    },
    schemas: {
      SuccessResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: true },
          message: { type: 'string' },
          data: { type: 'object' },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: false },
          message: { type: 'string' },
          errors: { type: 'array', items: { type: 'object' } },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: { type: 'string', example: 'clx1234abcd' },
          email: { type: 'string', example: 'user@example.com' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      Category: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string', example: 'Academic' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      Task: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string', example: 'Submit Final Report' },
          description: { type: 'string', nullable: true },
          priority: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'] },
          status: { type: 'string', enum: ['PENDING', 'COMPLETED'] },
          deadline: { type: 'string', format: 'date-time', nullable: true },
          category: { $ref: '#/components/schemas/Category', nullable: true },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      PriceEstimate: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          productName: { type: 'string', example: 'Panda Bear' },
          sizeCm: { type: 'number', example: 20 },
          complexity: { type: 'string', enum: ['EASY', 'MEDIUM', 'HARD', 'CUSTOM'] },
          estimatedHours: { type: 'number', example: 12 },
          estimatedMaterialCost: { type: 'integer', example: 60000 },
          minimumRecommendedPrice: { type: 'integer', example: 207000 },
          maximumRecommendedPrice: { type: 'integer', example: 276000 },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      Pagination: {
        type: 'object',
        properties: {
          total: { type: 'integer' },
          page: { type: 'integer' },
          limit: { type: 'integer' },
          totalPages: { type: 'integer' },
          hasNextPage: { type: 'boolean' },
          hasPrevPage: { type: 'boolean' },
        },
      },
      Note: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string', example: 'Meeting Notes' },
          content: { type: 'string', example: 'Discussed project timeline and deliverables.' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
          task: {
            type: 'object',
            nullable: true,
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
            },
          },
        },
      },
    },
  },
  tags: [
    { name: 'Auth', description: 'Authentication endpoints' },
    { name: 'Categories', description: 'Task category management' },
    { name: 'Tasks', description: 'Task management with filter, sort and pagination' },
    { name: 'Notes', description: 'Note-taking â€” standalone or attached to tasks' },
    { name: 'Estimator', description: 'Amigurumi price estimation and history' },
    { name: 'Dashboard', description: 'User statistics and overview' },
  ],
  paths: {
    // â”€â”€â”€ AUTH â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    '/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register a new user',
        description: 'Creates a new account and seeds 4 default categories (Academic, Organization, Crochet Business, Personal).',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', format: 'email', example: 'user@example.com' },
                  password: { type: 'string', minLength: 8, example: 'password123' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Registration successful', content: { 'application/json': { schema: { $ref: '#/components/schemas/SuccessResponse' } } } },
          409: { description: 'Email already registered', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
          422: { description: 'Validation failed', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', format: 'email', example: 'student@doitcha.dev' },
                  password: { type: 'string', example: 'password123' },
                },
              },
            },
          },
        },
        responses: {
          200: { description: 'Login successful, returns JWT token' },
          401: { description: 'Invalid credentials' },
        },
      },
    },
    '/auth/me': {
      get: {
        tags: ['Auth'],
        summary: 'Get current user',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Current user data', content: { 'application/json': { schema: { $ref: '#/components/schemas/SuccessResponse' } } } },
          401: { description: 'Unauthorized' },
        },
      },
    },
    // â”€â”€â”€ CATEGORIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    '/categories': {
      get: {
        tags: ['Categories'],
        summary: 'Get all categories',
        security: [{ bearerAuth: [] }],
        responses: { 200: { description: 'List of user categories' } },
      },
      post: {
        tags: ['Categories'],
        summary: 'Create a category',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name'],
                properties: { name: { type: 'string', example: 'Side Projects' } },
              },
            },
          },
        },
        responses: { 201: { description: 'Category created' }, 422: { description: 'Validation failed' } },
      },
    },
    '/categories/{id}': {
      put: {
        tags: ['Categories'],
        summary: 'Update a category',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name'],
                properties: { name: { type: 'string', example: 'Updated Name' } },
              },
            },
          },
        },
        responses: { 200: { description: 'Category updated' }, 404: { description: 'Not found' } },
      },
      delete: {
        tags: ['Categories'],
        summary: 'Delete a category',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Category deleted' }, 404: { description: 'Not found' } },
      },
    },
    // â”€â”€â”€ TASKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    '/tasks': {
      get: {
        tags: ['Tasks'],
        summary: 'Get all tasks',
        description: 'Supports filtering by status, priority, categoryId. Sort by createdAt or deadline. Paginated.',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'status', in: 'query', schema: { type: 'string', enum: ['PENDING', 'COMPLETED'] } },
          { name: 'priority', in: 'query', schema: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'] } },
          { name: 'categoryId', in: 'query', schema: { type: 'string' } },
          { name: 'sortBy', in: 'query', schema: { type: 'string', enum: ['createdAt', 'deadline'] } },
          { name: 'order', in: 'query', schema: { type: 'string', enum: ['asc', 'desc'] } },
          { name: 'page', in: 'query', schema: { type: 'integer', example: 1 } },
          { name: 'limit', in: 'query', schema: { type: 'integer', example: 10 } },
        ],
        responses: { 200: { description: 'Paginated list of tasks' } },
      },
      post: {
        tags: ['Tasks'],
        summary: 'Create a task',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['title'],
                properties: {
                  title: { type: 'string', example: 'Submit Final Report' },
                  description: { type: 'string' },
                  priority: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'], default: 'LOW' },
                  deadline: { type: 'string', format: 'date-time', example: '2026-07-01T23:59:00.000Z' },
                  categoryId: { type: 'string' },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Task created' }, 422: { description: 'Validation failed' } },
      },
    },
    '/tasks/{id}': {
      get: {
        tags: ['Tasks'],
        summary: 'Get task by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Task detail' }, 404: { description: 'Not found' } },
      },
      put: {
        tags: ['Tasks'],
        summary: 'Update a task',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' },
                  priority: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'] },
                  status: { type: 'string', enum: ['PENDING', 'COMPLETED'] },
                  deadline: { type: 'string', format: 'date-time', nullable: true },
                  categoryId: { type: 'string', nullable: true },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Task updated' }, 404: { description: 'Not found' } },
      },
      delete: {
        tags: ['Tasks'],
        summary: 'Delete a task',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Task deleted' }, 404: { description: 'Not found' } },
      },
    },
    '/tasks/{id}/complete': {
      patch: {
        tags: ['Tasks'],
        summary: 'Mark task as completed',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: {
          200: { description: 'Task marked as completed' },
          400: { description: 'Task already completed' },
          404: { description: 'Not found' },
        },
      },
    },
    // â”€â”€â”€ ESTIMATOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    '/estimator/calculate': {
      post: {
        tags: ['Estimator'],
        summary: 'Calculate price estimate (no save)',
        description: 'Calculates estimated hours, material cost, and recommended selling price range without saving to database.',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['productName', 'sizeCm', 'complexity'],
                properties: {
                  productName: { type: 'string', example: 'Panda Bear' },
                  sizeCm: { type: 'number', example: 20 },
                  complexity: { type: 'string', enum: ['EASY', 'MEDIUM', 'HARD', 'CUSTOM'] },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Estimate result',
            content: {
              'application/json': {
                example: {
                  success: true,
                  message: 'Estimate calculated successfully',
                  data: {
                    estimatedHours: 12,
                    estimatedMaterialCost: 60000,
                    minimumRecommendedPrice: 207000,
                    maximumRecommendedPrice: 276000,
                  },
                },
              },
            },
          },
        },
      },
    },
    '/estimator/save': {
      post: {
        tags: ['Estimator'],
        summary: 'Calculate and save estimate',
        description: 'Same as calculate but persists the result to the estimate history.',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['productName', 'sizeCm', 'complexity'],
                properties: {
                  productName: { type: 'string', example: 'Bunny Doll' },
                  sizeCm: { type: 'number', example: 15 },
                  complexity: { type: 'string', enum: ['EASY', 'MEDIUM', 'HARD', 'CUSTOM'] },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Estimate saved' }, 422: { description: 'Validation failed' } },
      },
    },
    '/estimator/convert-to-task': {
      post: {
        tags: ['Estimator'],
        summary: 'Save estimate and create a linked task',
        description: 'Calculates the estimate, saves it, and automatically creates a task under the Crochet Business category.',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['productName', 'sizeCm', 'complexity'],
                properties: {
                  productName: { type: 'string', example: 'Cat Amigurumi' },
                  sizeCm: { type: 'number', example: 25 },
                  complexity: { type: 'string', enum: ['EASY', 'MEDIUM', 'HARD', 'CUSTOM'] },
                  deadline: { type: 'string', format: 'date-time' },
                  priority: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'], default: 'LOW' },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Estimate saved and task created' }, 422: { description: 'Validation failed' } },
      },
    },
    '/estimator/history': {
      get: {
        tags: ['Estimator'],
        summary: 'Get estimate history',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'page', in: 'query', schema: { type: 'integer', example: 1 } },
          { name: 'limit', in: 'query', schema: { type: 'integer', example: 10 } },
        ],
        responses: { 200: { description: 'Paginated estimate history' } },
      },
    },
    '/estimator/history/{id}': {
      get: {
        tags: ['Estimator'],
        summary: 'Get estimate by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Estimate detail with linked tasks' }, 404: { description: 'Not found' } },
      },
    },
    // â”€â”€â”€ NOTES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    '/notes': {
      get: {
        tags: ['Notes'],
        summary: 'Get all notes',
        description: 'Get user notes. Optionally filter by taskId to get notes for a specific task. Paginated.',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'taskId', in: 'query', schema: { type: 'string' }, description: 'Filter by task ID' },
          { name: 'page', in: 'query', schema: { type: 'integer', example: 1 } },
          { name: 'limit', in: 'query', schema: { type: 'integer', example: 10 } },
        ],
        responses: { 200: { description: 'Paginated list of notes' } },
      },
      post: {
        tags: ['Notes'],
        summary: 'Create a note',
        description: 'Create a standalone note or attach it to a task by providing taskId.',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['title', 'content'],
                properties: {
                  title: { type: 'string', example: 'Project Meeting Notes' },
                  content: { type: 'string', example: 'Discussed Q1 deliverables and deadlines.' },
                  taskId: { type: 'string', description: 'Optional: attach note to a task' },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Note created' }, 422: { description: 'Validation failed' } },
      },
    },
    '/notes/{id}': {
      get: {
        tags: ['Notes'],
        summary: 'Get note by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Note detail' }, 404: { description: 'Not found' } },
      },
      put: {
        tags: ['Notes'],
        summary: 'Update a note',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  content: { type: 'string' },
                  taskId: { type: 'string', nullable: true, description: 'Set to null to detach from task' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Note updated' }, 404: { description: 'Not found' } },
      },
      delete: {
        tags: ['Notes'],
        summary: 'Delete a note',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Note deleted' }, 404: { description: 'Not found' } },
      },
    },
    '/notes/task/{taskId}': {
      get: {
        tags: ['Notes'],
        summary: 'Get all notes for a specific task',
        security: [{ bearerAuth: [] }],
        parameters: [{ name: 'taskId', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'List of notes for the task' }, 404: { description: 'Task not found' } },
      },
    },
    // â”€â”€â”€ DASHBOARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    '/dashboard': {
      get: {
        tags: ['Dashboard'],
        summary: 'Get dashboard statistics',
        description: 'Returns totalTasks, completedTasks, pendingTasks, overdueTasks, and completionRate.',
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: 'Dashboard stats',
            content: {
              'application/json': {
                example: {
                  success: true,
                  message: 'Dashboard statistics retrieved successfully',
                  data: {
                    totalTasks: 10,
                    completedTasks: 6,
                    pendingTasks: 4,
                    overdueTasks: 1,
                    completionRate: 60,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export function setupSwagger(app: Express, guard: RequestHandler): void {
  // Expose spec JSON (protected)
  app.get('/admin/swagger.json', guard, (_req, res) => {
    res.json(swaggerSpec);
  });

  // Serve custom docs page (protected)
  app.get('/admin', guard, (_req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'docs.html'));
  });
}
