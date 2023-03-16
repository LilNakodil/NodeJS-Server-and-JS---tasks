CREATE TABLE roles
(
    id serial NOT NULL PRIMARY KEY ,
    role_ varchar(50)
);
CREATE TABLE PERSONN
(
    id serial NOT NULL PRIMARY KEY ,
    directors VARCHAR(20) ARRAY[20],
    scenarists VARCHAR(20) ARRAY[20],
    producers VARCHAR(20) ARRAY[20],
    operators VARCHAR(20) ARRAY[20],
    composers VARCHAR(20) ARRAY[20],
    artists VARCHAR(20) ARRAY[20],
    montage VARCHAR(20) ARRAY[20],
    mainroles VARCHAR(20) ARRAY[20],
    duplicatedroles VARCHAR(20) ARRAY[20]
);
CREATE TABLE GENRES
(
    id serial NOT NULL PRIMARY KEY,
    genreName varchar(50)
);
CREATE TABLE VIEWERS
(
    id serial NOT NULL PRIMARY KEY,
    CountView INTEGER ARRAY[20],
    countries varchar(20) ARRAY [20]
);
CREATE TABLE FILMS
(
    id serial NOT NULL PRIMARY KEY,
    filmName varchar(50),
    country varchar(30),
    premiereInWorld timestamp without time zone,
    premiereInNativeCountry timestamp without time zone, 
    slogan text,
    description text,
    age INTEGER,
    rating FLOAT,
    genre INTEGER,
    viewerss INTEGER,
    genre2 INTEGER,
    genre3 INTEGER,
    genre4 INTEGER,
    duration INTEGER,
    persons INTEGER,
    
    FOREIGN KEY (genre) REFERENCES genres(id),
    FOREIGN KEY (genre2) REFERENCES genres(id),
    FOREIGN KEY (genre3) REFERENCES genres(id),
    FOREIGN KEY (genre4) REFERENCES genres(id),
    FOREIGN KEY (persons) REFERENCES personn(id),
    FOREIGN KEY (viewerss) REFERENCES viewers(id)

);
CREATE TABLE BUDGET
(
    id serial NOT NULL PRIMARY KEY,
    budget money,
    marketing money,
    tallagesInWorld money,
    tallagesInNativeCountry money
);