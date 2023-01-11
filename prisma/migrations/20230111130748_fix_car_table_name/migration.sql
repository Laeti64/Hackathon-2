/*
  Warnings:

  - You are about to drop the `Cars` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AgencyToCars` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookingToCars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_connectorId_fkey";

-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_modelId_fkey";

-- DropForeignKey
ALTER TABLE "_AgencyToCars" DROP CONSTRAINT "_AgencyToCars_A_fkey";

-- DropForeignKey
ALTER TABLE "_AgencyToCars" DROP CONSTRAINT "_AgencyToCars_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookingToCars" DROP CONSTRAINT "_BookingToCars_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookingToCars" DROP CONSTRAINT "_BookingToCars_B_fkey";

-- DropTable
DROP TABLE "Cars";

-- DropTable
DROP TABLE "_AgencyToCars";

-- DropTable
DROP TABLE "_BookingToCars";

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "imgUrl2" TEXT,
    "imgUrl3" TEXT,
    "grayCardUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "autonomie" INTEGER NOT NULL,
    "mileAge" INTEGER NOT NULL,
    "nbPlaces" INTEGER NOT NULL,
    "batterie" TEXT NOT NULL,
    "puissance" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "nbPortes" INTEGER NOT NULL,
    "barCodeUrl" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "autonomous" BOOLEAN NOT NULL DEFAULT false,
    "tempsCharge" INTEGER NOT NULL,
    "prixKm" INTEGER NOT NULL,
    "prixJour" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "connectorId" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AgencyToCar" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BookingToCar" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_id_key" ON "Car"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_AgencyToCar_AB_unique" ON "_AgencyToCar"("A", "B");

-- CreateIndex
CREATE INDEX "_AgencyToCar_B_index" ON "_AgencyToCar"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookingToCar_AB_unique" ON "_BookingToCar"("A", "B");

-- CreateIndex
CREATE INDEX "_BookingToCar_B_index" ON "_BookingToCar"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "Connector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgencyToCar" ADD CONSTRAINT "_AgencyToCar_A_fkey" FOREIGN KEY ("A") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgencyToCar" ADD CONSTRAINT "_AgencyToCar_B_fkey" FOREIGN KEY ("B") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingToCar" ADD CONSTRAINT "_BookingToCar_A_fkey" FOREIGN KEY ("A") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingToCar" ADD CONSTRAINT "_BookingToCar_B_fkey" FOREIGN KEY ("B") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
