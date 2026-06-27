# API Documentation - HPP Calculation System

## Overview
Sistem perhitungan HPP (Harga Pokok Penjualan) yang lengkap dengan manajemen bahan baku, pengaturan profit margin dan pajak.

---

## 1. Materials API

Endpoint untuk manajemen bahan baku.

### Create Material
```http
POST /api/materials
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Benang Katun",
  "unit": "meter",
  "price": 5000,
  "stock": 100,
  "description": "Benang katun warna merah"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "clxxx...",
    "name": "Benang Katun",
    "unit": "meter",
    "price": 5000,
    "stock": 100,
    "description": "Benang katun warna merah",
    "userId": "clxxx...",
    "createdAt": "2026-06-27T...",
    "updatedAt": "2026-06-27T..."
  }
}
```

### Get All Materials
```http
GET /api/materials?page=1&limit=10&search=benang
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "clxxx...",
      "name": "Benang Katun",
      "unit": "meter",
      "price": 5000,
      "stock": 100,
      "description": "Benang katun warna merah",
      "createdAt": "2026-06-27T..."
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

### Get Material by ID
```http
GET /api/materials/:id
Authorization: Bearer {token}
```

### Update Material
```http
PUT /api/materials/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "price": 5500,
  "stock": 150
}
```

### Delete Material
```http
DELETE /api/materials/:id
Authorization: Bearer {token}
```

---

## 2. Settings API

Endpoint untuk pengaturan profit margin dan pajak.

### Get Settings
```http
GET /api/settings
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "clxxx...",
    "userId": "clxxx...",
    "profitMarginMin": 50,
    "profitMarginMax": 100,
    "taxPercentage": 11,
    "laborCostPerHour": 15000,
    "createdAt": "2026-06-27T...",
    "updatedAt": "2026-06-27T..."
  }
}
```

### Update Settings
```http
PUT /api/settings
Authorization: Bearer {token}
Content-Type: application/json

{
  "profitMarginMin": 60,
  "profitMarginMax": 120,
  "taxPercentage": 11,
  "laborCostPerHour": 20000
}
```

**Fields:**
- `profitMarginMin`: Margin profit minimum (dalam persen)
- `profitMarginMax`: Margin profit maksimum (dalam persen)
- `taxPercentage`: Persentase pajak (0-100)
- `laborCostPerHour`: Biaya tenaga kerja per jam (Rupiah)

---

## 3. HPP Calculation API

Endpoint untuk perhitungan HPP.

### Calculate HPP (tanpa simpan)
```http
POST /api/hpp/calculate
Authorization: Bearer {token}
Content-Type: application/json

{
  "productName": "Boneka Beruang 30cm",
  "materials": [
    {
      "materialId": "clxxx...",
      "quantity": 50
    },
    {
      "materialId": "clyyy...",
      "quantity": 2
    }
  ],
  "estimatedHours": 8,
  "profitMarginPercentage": 75
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "productName": "Boneka Beruang 30cm",
    "materialUsages": [
      {
        "materialId": "clxxx...",
        "materialName": "Benang Katun",
        "quantity": 50,
        "unit": "meter",
        "unitPrice": 5000,
        "totalPrice": 250000
      },
      {
        "materialId": "clyyy...",
        "materialName": "Dakron",
        "quantity": 2,
        "unit": "kg",
        "unitPrice": 30000,
        "totalPrice": 60000
      }
    ],
    "totalMaterialCost": 310000,
    "totalLaborCost": 120000,
    "estimatedHours": 8,
    "totalHpp": 430000,
    "profitMarginPercentage": 75,
    "taxPercentage": 11,
    "sellingPriceBeforeTax": 752500,
    "taxAmount": 82775,
    "finalSellingPrice": 835275,
    "breakdown": {
      "materials": 310000,
      "labor": 120000,
      "subtotal": 430000,
      "profit": 322500,
      "tax": 82775,
      "total": 835275
    }
  }
}
```

### Save HPP Calculation
```http
POST /api/hpp/save
Authorization: Bearer {token}
Content-Type: application/json

{
  "productName": "Boneka Beruang 30cm",
  "materials": [
    {
      "materialId": "clxxx...",
      "quantity": 50
    }
  ],
  "estimatedHours": 8,
  "profitMarginPercentage": 75
}
```

**Response:** Sama seperti calculate, tapi data disimpan ke database.

### Get HPP History
```http
GET /api/hpp/history?page=1&limit=10&search=boneka
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "clxxx...",
      "productName": "Boneka Beruang 30cm",
      "totalMaterialCost": 310000,
      "totalLaborCost": 120000,
      "estimatedHours": 8,
      "totalHpp": 430000,
      "profitMarginPercentage": 75,
      "taxPercentage": 11,
      "sellingPriceBeforeTax": 752500,
      "taxAmount": 82775,
      "finalSellingPrice": 835275,
      "createdAt": "2026-06-27T...",
      "materialUsage": [
        {
          "id": "clxxx...",
          "quantity": 50,
          "unitPrice": 5000,
          "totalPrice": 250000,
          "material": {
            "id": "clxxx...",
            "name": "Benang Katun",
            "unit": "meter"
          }
        }
      ]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

### Get HPP by ID
```http
GET /api/hpp/history/:id
Authorization: Bearer {token}
```

### Delete HPP Calculation
```http
DELETE /api/hpp/history/:id
Authorization: Bearer {token}
```

---

## Rumus Perhitungan HPP

```
1. Total Biaya Bahan = Σ(Quantity × Unit Price)
2. Total Biaya Tenaga Kerja = Estimasi Jam × Tarif per Jam
3. Total HPP = Total Biaya Bahan + Total Biaya Tenaga Kerja
4. Harga Jual (Sebelum Pajak) = Total HPP × (1 + Profit Margin %/100)
5. Pajak = Harga Jual (Sebelum Pajak) × (Tax %/100)
6. Harga Jual Final = Harga Jual (Sebelum Pajak) + Pajak
```

## Contoh Perhitungan

**Input:**
- Bahan 1: 50 meter × Rp 5.000 = Rp 250.000
- Bahan 2: 2 kg × Rp 30.000 = Rp 60.000
- Jam kerja: 8 jam × Rp 15.000 = Rp 120.000
- Profit margin: 75%
- Pajak: 11%

**Perhitungan:**
1. Total Bahan = Rp 310.000
2. Total Tenaga Kerja = Rp 120.000
3. HPP = Rp 430.000
4. Harga Sebelum Pajak = Rp 430.000 × 1.75 = Rp 752.500
5. Pajak = Rp 752.500 × 0.11 = Rp 82.775
6. **Harga Jual Final = Rp 835.275**

---

## 4. Tasks API (Todo List)

Endpoint untuk manajemen task/todo list.

### Create Task
```http
POST /api/tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Buat 10 boneka beruang",
  "description": "Boneka beruang ukuran 30cm dengan warna coklat",
  "priority": "HIGH",
  "deadline": "2026-07-01T10:00:00Z",
  "categoryId": "clxxx..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": "clxxx...",
    "title": "Buat 10 boneka beruang",
    "description": "Boneka beruang ukuran 30cm dengan warna coklat",
    "priority": "HIGH",
    "status": "PENDING",
    "deadline": "2026-07-01T10:00:00Z",
    "categoryId": "clxxx...",
    "userId": "clxxx...",
    "createdAt": "2026-06-27T...",
    "updatedAt": "2026-06-27T..."
  }
}
```

### Get All Tasks
```http
GET /api/tasks?status=PENDING&priority=HIGH&categoryId=clxxx&sortBy=deadline&order=asc&page=1&limit=10
Authorization: Bearer {token}
```

**Query Parameters:**
- `status`: Filter by status (PENDING, COMPLETED)
- `priority`: Filter by priority (LOW, MEDIUM, HIGH, URGENT)
- `categoryId`: Filter by category ID
- `sortBy`: Sort by field (createdAt, deadline) - default: createdAt
- `order`: Sort order (asc, desc) - default: desc
- `page`: Page number - default: 1
- `limit`: Items per page - default: 10

**Response:**
```json
{
  "success": true,
  "message": "Tasks retrieved successfully",
  "data": {
    "tasks": [
      {
        "id": "clxxx...",
        "title": "Buat 10 boneka beruang",
        "description": "Boneka beruang ukuran 30cm dengan warna coklat",
        "priority": "HIGH",
        "status": "PENDING",
        "deadline": "2026-07-01T10:00:00Z",
        "categoryId": "clxxx...",
        "createdAt": "2026-06-27T...",
        "category": {
          "id": "clxxx...",
          "name": "Produksi",
          "color": "#FF5733"
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

### Get Task by ID
```http
GET /api/tasks/:id
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "message": "Task retrieved successfully",
  "data": {
    "id": "clxxx...",
    "title": "Buat 10 boneka beruang",
    "description": "Boneka beruang ukuran 30cm dengan warna coklat",
    "priority": "HIGH",
    "status": "PENDING",
    "deadline": "2026-07-01T10:00:00Z",
    "categoryId": "clxxx...",
    "userId": "clxxx...",
    "createdAt": "2026-06-27T...",
    "updatedAt": "2026-06-27T...",
    "category": {
      "id": "clxxx...",
      "name": "Produksi",
      "color": "#FF5733"
    }
  }
}
```

### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Buat 15 boneka beruang",
  "priority": "URGENT",
  "status": "COMPLETED",
  "deadline": null
}
```

**Response:**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "id": "clxxx...",
    "title": "Buat 15 boneka beruang",
    "description": "Boneka beruang ukuran 30cm dengan warna coklat",
    "priority": "URGENT",
    "status": "COMPLETED",
    "deadline": null,
    "categoryId": "clxxx...",
    "userId": "clxxx...",
    "createdAt": "2026-06-27T...",
    "updatedAt": "2026-06-27T..."
  }
}
```

### Mark Task as Completed
```http
PATCH /api/tasks/:id/complete
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "message": "Task marked as completed",
  "data": {
    "id": "clxxx...",
    "title": "Buat 10 boneka beruang",
    "status": "COMPLETED",
    "updatedAt": "2026-06-27T..."
  }
}
```

### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": null
}
```

**Field Descriptions:**
- `title`: Judul task (1-200 karakter, required)
- `description`: Deskripsi detail task (max 2000 karakter, optional)
- `priority`: Prioritas task (LOW, MEDIUM, HIGH, URGENT) - default: LOW
- `status`: Status task (PENDING, COMPLETED)
- `deadline`: Batas waktu dalam format ISO 8601 (optional, nullable)
- `categoryId`: ID kategori task (optional, nullable)

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "price",
      "message": "Price must be non-negative"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Authentication required"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Material not found"
}
```
