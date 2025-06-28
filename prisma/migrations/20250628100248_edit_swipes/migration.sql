/*
  Warnings:

  - You are about to drop the column `pokemin_id` on the `Swipes` table. All the data in the column will be lost.
  - You are about to drop the `PokemonStats` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id,pokemon_id]` on the table `Swipes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pokemon_id` to the `Swipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Swipes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SwipeType" AS ENUM ('LIKE', 'DISLIKE');

-- AlterTable
ALTER TABLE "Swipes" DROP COLUMN "pokemin_id",
ADD COLUMN     "pokemon_id" INTEGER NOT NULL,
ADD COLUMN     "type" "SwipeType" NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL;

-- DropTable
DROP TABLE "PokemonStats";

-- CreateIndex
CREATE UNIQUE INDEX "Swipes_user_id_pokemon_id_key" ON "Swipes"("user_id", "pokemon_id");
