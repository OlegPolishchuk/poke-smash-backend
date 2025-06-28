-- CreateTable
CREATE TABLE "PokemonStats" (
    "id" TEXT NOT NULL,
    "pokemom_id" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "disliked" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PokemonStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PokemonStats_pokemom_id_key" ON "PokemonStats"("pokemom_id");
