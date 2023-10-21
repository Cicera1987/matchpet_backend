-- CreateEnum
CREATE TYPE "conditions_type" AS ENUM ('IF', 'THEN');

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "operator" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "id_variable" INTEGER NOT NULL,
    "id_rule" INTEGER NOT NULL,
    "type" "conditions_type" NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rules" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Values" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "id_variable" INTEGER NOT NULL,

    CONSTRAINT "Values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Variable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Condition" ADD CONSTRAINT "Condition_id_rule_fkey" FOREIGN KEY ("id_rule") REFERENCES "Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Values" ADD CONSTRAINT "Values_id_variable_fkey" FOREIGN KEY ("id_variable") REFERENCES "Variable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
