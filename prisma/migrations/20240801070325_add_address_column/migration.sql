/*
  Warnings:

  - Added the required column `address` to the `Vacancy` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vacancy" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "urgency" INTEGER NOT NULL
);
INSERT INTO "new_Vacancy" ("id", "start_date", "title", "urgency") SELECT "id", "start_date", "title", "urgency" FROM "Vacancy";
DROP TABLE "Vacancy";
ALTER TABLE "new_Vacancy" RENAME TO "Vacancy";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
