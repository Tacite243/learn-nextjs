const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

// const users = [
//   { name: 'John Doe', email: 'john@example.com', password: 'password1' },
//   // autres utilisateurs
// ];

// const customers = [
//   { name: 'Customer 1', email: 'customer1@example.com', imageUrl: 'url1' },
//   // autres clients
// ];

// const invoices = [
//   { customerId : '66c02e05-1c6d-4977-8b2b-781b67f98748', userId: '6764a64d-ef70-4acf-9394-fda225bf8010', amount: 100, status: 'Paid' },
//   // autres factures
// ];

const revenue = [
  { revenue: 5000 },
  // autres revenus
];

// async function seedUsers() {
//   for (const user of users) {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     await prisma.user.upsert({
//       where: { email: user.email },
//       update: {},
//       create: { 
//         name: user.name,
//         email: user.email,
//         password: hashedPassword,
//       },
//     });
//   }
// }

// async function seedCustomers() {
//   for (const customer of customers) {
//     await prisma.customer.upsert({
//       where: { email: customer.email },
//       update: {},
//       create: {
//         name: customer.name,
//         email: customer.email,
//         imageUrl: customer.imageUrl,
//       },
//     });
//   }
// }

// async function seedInvoices() {
//   for (const invoice of invoices) {
//     await prisma.invoice.create({
//       data: {
//         customerId: invoice.customerId,
//         userId: invoice.userId,
//         amount: invoice.amount,
//         status: invoice.status,
//       },
//     });
//   }
// }

async function seedRevenue() {
  for (const rev of revenue) {
    await prisma.revenue.create({
      data: {
        revenue: rev.revenue
      }
    });
  }
}


async function main() {
  // await seedUsers();
  // await seedCustomers();
  // await seedInvoices();
  await seedRevenue();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
