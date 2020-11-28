CREATE TABLE posts (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(256) NOT NULL,
        author INT UNSIGNED NOT NULL,
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        content MEDIUMTEXT,
        excerpt TEXT,
        name VARCHAR(255) NOT NULL,
        guid VARCHAR(64) NOT NULL,
        status TINYINT UNSIGNED DEFAULT 0,
        comment_status BIT DEFAULT 1,
        UNIQUE KEY unique_guid (guid)
    )
ENGINE=InnoDB CHARACTER SET utf8;

CREATE TABLE bs (
  name varchar(10) DEFAULT NULL
)
ENGINE=InnoDB CHARACTER SET utf8;