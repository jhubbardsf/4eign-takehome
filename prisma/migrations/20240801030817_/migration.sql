-- CreateTable
CREATE TABLE "Vacancy" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "urgency" INTEGER NOT NULL
);
