/*
  Warnings:

  - You are about to drop the `_BookingToCar` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `carId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookingToCar" DROP CONSTRAINT "_BookingToCar_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookingToCar" DROP CONSTRAINT "_BookingToCar_B_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "carId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BookingToCar";

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
