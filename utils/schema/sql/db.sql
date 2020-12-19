CREATE TABLE posts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    author INT UNSIGNED NOT NULL,
    createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    content MEDIUMTEXT,
    excerpt TEXT,
    name VARCHAR(255) NOT NULL,
    guid VARCHAR(64) NOT NULL,
    status TINYINT UNSIGNED DEFAULT 0,
    commentStatus BIT DEFAULT 1,
    UNIQUE KEY unique_guid (guid)
)
ENGINE=InnoDB CHARACTER SET utf8;

CREATE TABLE authors (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userName varchar(20) NOT NULL,
    email varchar(50) NOT NULL,
    fullName varchar(75),
    status TINYINT UNSIGNED DEFAULT 1,
    UNIQUE KEY unique_email (email),
    UNIQUE KEY unique_username (userName)
)
ENGINE=InnoDB CHARACTER SET utf8;