/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Swipes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Swipes_user_id_pokemon_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Swipes_user_id_key" ON "Swipes"("user_id");
