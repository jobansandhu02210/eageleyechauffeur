-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "promoCode" TEXT NOT NULL,
    "customerEmail" TEXT,
    "customerPhone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "driverId" TEXT NOT NULL,
    "bookingId" TEXT,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "rideDate" TEXT,
    "rideFrom" TEXT,
    "rideTo" TEXT,
    "lineItems" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'unpaid',
    "tipAmount" DOUBLE PRECISION,
    "stripePaymentIntentId" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidAt" TIMESTAMP(3),

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "service" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "dropoff" TEXT,
    "airport" TEXT,
    "date" TEXT,
    "time" TEXT,
    "vehicle" TEXT,
    "passengers" INTEGER,
    "luggage" INTEGER,
    "hours" INTEGER,
    "specialRequests" TEXT,
    "quoteAmount" DOUBLE PRECISION,
    "quoteLabel" TEXT,
    "customerName" TEXT,
    "customerEmail" TEXT,
    "customerPhone" TEXT,
    "promoCode" TEXT,
    "stripeCustomerId" TEXT,
    "stripePaymentMethodId" TEXT,
    "stripeSetupIntentId" TEXT,
    "stripePaymentIntentId" TEXT,
    "paymentStatus" TEXT DEFAULT 'pending',
    "chargedAmount" DOUBLE PRECISION,
    "paidAt" TIMESTAMP(3),
    "driverId" TEXT,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_code_key" ON "Driver"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Referral_bookingId_key" ON "Referral"("bookingId");

-- CreateIndex
CREATE INDEX "Referral_promoCode_idx" ON "Referral"("promoCode");

-- CreateIndex
CREATE INDEX "Referral_driverId_createdAt_idx" ON "Referral"("driverId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_token_key" ON "Invoice"("token");

-- CreateIndex
CREATE INDEX "Invoice_token_idx" ON "Invoice"("token");

-- CreateIndex
CREATE INDEX "Invoice_customerEmail_idx" ON "Invoice"("customerEmail");

-- CreateIndex
CREATE INDEX "Invoice_createdAt_idx" ON "Invoice"("createdAt");

-- CreateIndex
CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");

-- CreateIndex
CREATE INDEX "Booking_promoCode_idx" ON "Booking"("promoCode");

-- CreateIndex
CREATE INDEX "Booking_driverId_idx" ON "Booking"("driverId");

-- CreateIndex
CREATE INDEX "Booking_stripePaymentIntentId_idx" ON "Booking"("stripePaymentIntentId");

-- CreateIndex
CREATE INDEX "Booking_stripeCustomerId_idx" ON "Booking"("stripeCustomerId");

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
