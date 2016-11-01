# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
host_id     | integer   | not null, foreign key (references users), indexed
image_url   | string    |
date        | date      | not null
start_time  | time      | not null
end_time    | time      | not null

## categories_events_join_table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key (references categories), indexed
event_id    | integer   | not null, foreign key (references events), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique

## events_attendee_join_table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references events), indexed
attendee_id | integer   | not null, foreign key (references users), indexed

## events_interested_join_table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references events), indexed
user_id     | integer   | not null, foreign key (references users), indexed
