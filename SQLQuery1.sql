﻿CREATE TABLE Books
(
	BookID BIGINT PRIMARY KEY IDENTITY(1,1),
	Title VARCHAR(100),
	AuthorName VARCHAR(100),
	Price DECIMAL(18,2)
)

SELECT * FROM Books