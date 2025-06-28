/*
  Warnings:

  - You are about to drop the column `pokemom_id` on the `PokemonStats` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pokemon_id]` on the table `PokemonStats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pokemon_id` to the `PokemonStats` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PokemonStats_pokemom_id_key";

-- AlterTable
ALTER TABLE "PokemonStats" DROP COLUMN "pokemom_id",
ADD COLUMN     "pokemon_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PokemonStats_pokemon_id_key" ON "PokemonStats"("pokemon_id");
