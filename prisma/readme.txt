#Database Migration
    $npx prisma migrate dev --name init

#Insert into Database from csv file
    $sqlite3
    sqlite>.mode csv
    sqlite>.import <filename.csv> <table_name>;
    sqlite>.exit;
