--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Ubuntu 12.3-1.pgdg20.04+1)
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_table_access_method = heap;

--
-- Name: town; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.town (
    location_id integer NOT NULL,
    "City" character varying NOT NULL
);


--
-- Name: Location_town_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Location_town_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Location_town_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Location_town_id_seq" OWNED BY public.town.location_id;


--
-- Name: notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    note character varying(1000) NOT NULL,
    date date NOT NULL,
    title character varying(250) NOT NULL
);


--
-- Name: Notes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Notes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Notes_id_seq" OWNED BY public.notes.id;


--
-- Name: organization; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.organization (
    org_id integer NOT NULL,
    organization character varying(255) NOT NULL
);


--
-- Name: Organization_org_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Organization_org_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Organization_org_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Organization_org_id_seq" OWNED BY public.organization.org_id;


--
-- Name: contact; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contact (
    id integer NOT NULL,
    contact_name character varying(50) NOT NULL,
    added_by character varying(255) NOT NULL,
    contact_type character varying(100),
    contact_phone text
);


--
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events (
    id integer NOT NULL,
    event_name character varying(100) NOT NULL,
    event_location character varying(250) NOT NULL,
    event_date date NOT NULL,
    event_type integer,
    event_time time without time zone
);


--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.events.id;


--
-- Name: meeting; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.meeting (
    id integer NOT NULL,
    added_by character varying(255) NOT NULL,
    meeting_address character varying(150) NOT NULL,
    town_id integer NOT NULL,
    meeting_id integer NOT NULL,
    meeting_day character varying(100) NOT NULL,
    meeting_time time with time zone,
    meeting_name character varying(200) NOT NULL
);


--
-- Name: meeting_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.meeting_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: meeting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.meeting_id_seq OWNED BY public.meeting.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    email character varying(250),
    user_access integer DEFAULT 1 NOT NULL
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: contact id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- Name: meeting id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meeting ALTER COLUMN id SET DEFAULT nextval('public.meeting_id_seq'::regclass);


--
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public."Notes_id_seq"'::regclass);


--
-- Name: organization org_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.organization ALTER COLUMN org_id SET DEFAULT nextval('public."Organization_org_id_seq"'::regclass);


--
-- Name: town location_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.town ALTER COLUMN location_id SET DEFAULT nextval('public."Location_town_id_seq"'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (1, 'NCADD', 'test', 'help', '1-800-622-2255');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (2, 'National Institute on Drug Abuse', 'test', 'help', '1-800-662-4357');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (3, 'SAMHSA', 'test', 'help', '1-800-662-4357');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (4, 'National Suicide Prevention Lifeline', 'test', 'help', '1-800-273-8255');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (5, 'Partnership for Drug Free Kids', 'test', 'help', '1-855-378-4373');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (6, 'National Drug Helpline', 'test', 'help', '1-844-289-0879');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (7, 'Boys Town', 'test', 'help', '800-448-3000');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (8, 'Compassion Treatment Services', 'test', 'treat', '218-844-5782');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (9, 'Lakes Counseling Center', 'test', 'treat', '218-847-0696');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (10, 'Lakeland Mental Health Center', 'test', 'treat', '218-847-1676');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (11, 'Drake Counseling Services', 'test', 'treat', '218-847-1329');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (12, 'Lost & Found Ministry', 'test', 'treat', '218-287-2089');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (13, 'ShareHouse', 'test', 'treat', '877-294-6561');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (14, 'First Step Recovery', 'test', 'treat', '701-451-4900');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (15, 'Face It Together', 'test', 'treat', '701-566-5631');
INSERT INTO public.contact (id, contact_name, added_by, contact_type, contact_phone) VALUES (16, 'Prairie St. Johns', 'test', 'treat', '701-476-7200');


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.events (id, event_name, event_location, event_date, event_type, event_time) VALUES (13, 'test2', 'Fargo ND', '2020-07-25', 2, '12:58:00');
INSERT INTO public.events (id, event_name, event_location, event_date, event_type, event_time) VALUES (19, 'test3', 'Perham, MN', '2020-07-23', 2, '14:27:00');
INSERT INTO public.events (id, event_name, event_location, event_date, event_type, event_time) VALUES (20, 'test4', 'Detroit Lakes Alano Club', '2020-07-16', 2, '13:28:00');
INSERT INTO public.events (id, event_name, event_location, event_date, event_type, event_time) VALUES (21, 'test5', 'Moorhead, MN', '2020-07-31', 1, '05:40:00');
INSERT INTO public.events (id, event_name, event_location, event_date, event_type, event_time) VALUES (22, 'test5', 'Detroit Lakes, MN', '2020-07-22', 3, '20:00:00');


--
-- Data for Name: meeting; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (1, 'test', '827 Summit Ave', 1, 2, 'Monday', '20:00:00-05', 'Off The Hook');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (2, 'test', '43452 Co Hwy 34', 2, 2, 'Tuesday', '19:00:00-05', 'Off The Hook');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (3, 'test', '827 Summit Ave', 1, 2, 'Wednesday', '20:00:00-05', 'Off The Hook');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (4, 'test', '43452 Co Hwy 34', 2, 2, 'Thursday', '19:00:00-05', 'Off The Hook');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (5, 'test', '199 Birch Ave. W', 3, 2, 'Thursday', '19:00:00-05', 'Out Of The Ashes');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (6, 'test', '827 Summit Ave', 1, 2, 'Friday', '20:30:00-05', 'Off The Hook');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (7, 'test', '43452 Co Hwy 34', 2, 2, 'Saturday', '19:00:00-05', 'Off The Hook');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (9, 'test', '121 9th St S', 4, 2, 'Monday', '12:00:00-05', 'A Break in the Day');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (10, 'test', '901 North Broadway', 4, 2, 'Monday', '18:30:00-05', 'Sherwood Mens Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (11, 'test', '2801 North Broadway', 4, 2, 'Monday', '20:00:00-05', 'Monday Night Candlelight');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (12, 'test', '121 9th St S', 4, 2, 'Tuesday', '12:00:00-05', 'A Break in the Day');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (13, 'test', '650 2nd Ave N', 4, 2, 'Tuesday', '18:30:00-05', 'Poop in a Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (14, 'test', '21 9th St  S', 4, 2, 'Tuesday', '20:00:00-05', 'H.O.W Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (15, 'test', '121 9th St S', 4, 2, 'Wednesday', '12:00:00-05', 'A Break in the Day');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (16, 'test', '2101 N Elm St', 4, 2, 'Wednesday', '12:00:00-05', 'NA at the VA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (17, 'test', '200 5th St S', 5, 2, 'Wednesday', '19:30:00-05', 'Just For Today');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (18, 'test', '121 9th St S', 4, 2, 'Thursday', '12:00:00-05', 'A Break in the Day');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (19, 'test', '906 1st Ave S', 4, 2, 'Thursday', '20:00:00-05', 'Its a Good Thing');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (20, 'test', '121 9th St S', 4, 2, 'Friday', '12:00:00-05', 'A Break in the Day');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (21, 'test', '111 9th St S', 4, 2, 'Friday', '19:30:00-05', 'Rainbow Way');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (22, 'test', '401 40th Ave S', 5, 2, 'Friday', '21:00:00-05', 'Friday Night Speaker Mtg');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (23, 'test', '21 9th St S', 4, 2, 'Saturday', '09:00:00-05', 'Living Clean');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (24, 'test', '1710 5th St S', 4, 2, 'Saturday', '12:00:00-05', 'One Page at a Time');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (25, 'test', '309 4th St N', 4, 2, 'Saturday', '19:30:00-05', 'Saturday Addicts Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (26, 'test', '610 13th St N', 5, 2, 'Saturday', '22:00:00-05', 'NA After Dark');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (27, 'test', '916 Main Ave', 4, 2, 'Sunday', '15:00:00-05', 'She Do Recover');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (28, 'test', '4227 9th Ave SW', 4, 2, 'Sunday', '18:30:00-05', 'Recovery in Motion');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (29, 'test', '650 2nd Ave N', 4, 2, 'Sunday', '18:30:00-05', 'Circle of Recovery');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (30, 'test', '906 1st Ave S', 4, 2, 'Sunday', '20:00:00-05', 'Clean and Free');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (8, 'test', '827 Summit Ave', 1, 2, 'Saturday', '22:00:00-05', 'Candle Light');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (31, 'test', '827 Summit Ave', 1, 1, 'Friday', '12:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (32, 'test', '20996 Co Hwy 20', 1, 1, 'Friday', '19:30:00-05', 'St Mary of The Lake Church');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (33, 'test', '827 Summit Ave', 1, 1, 'Tuesday', '20:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (34, 'test', '827 Summit Ave', 1, 1, 'Saturday', '09:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (35, 'test', '827 Summit Ave', 1, 1, 'Wednesday', '18:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (36, 'test', '827 Summit Ave', 1, 1, 'Wednesday', '12:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (37, 'test', '827 Summit Ave', 1, 1, 'Thursday', '12:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (38, 'test', '20996 Co Hwy 20', 1, 1, 'Saturday', '09:30:00-05', 'St Mary of The Lake Church');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (39, 'test', '912 Lake St', 1, 1, 'Friday', '12:00:00-05', 'First Lutheran Church');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (40, 'test', '827 Summit Ave', 1, 1, 'Tuesday', '12:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (41, 'test', '827 Summit Ave', 1, 1, 'Saturday', '20:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (42, 'test', '912 Lake St', 1, 1, 'Tuesday', '09:00:00-05', 'First Lutheran Church');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (43, 'test', '827 Summit Ave', 1, 1, 'Thursday', '20:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (44, 'test', '827 Summit Ave', 1, 1, 'Sunday', '20:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (45, 'test', '827 Summit Ave', 1, 1, 'Monday', '12:00:00-05', 'Alano Club');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (46, 'test', '43452 Co Hwy 34', 2, 1, 'Friday', '19:00:00-05', 'Perham Alano Society');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (47, 'test', '43452 Co Hwy 34', 2, 1, 'Thursday', '12:00:00-05', 'Perham Alano Society');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (48, 'test', '43452 Co Hwy 34', 2, 1, 'Saturday', '09:30:00-05', 'Perham Alano Society');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (49, 'test', '43452 Co Hwy 34', 2, 1, 'Wednesday', '19:00:00-05', 'Perham Alano Society');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (50, 'test', '43452 Co Hwy 34', 2, 1, 'Monday', '19:00:00-05', 'Perham Alano Society');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (51, 'test', '1112 3rd Ave S', 4, 1, 'Sunday', '11:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (52, 'test', '1112 3rd Ave S', 4, 1, 'Sunday', '14:00:00-05', 'Fargo AA First Steps to Sobriety');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (53, 'test', '21 9th St S', 4, 1, 'Sunday', '17:30:00-05', 'Daily Refection Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (54, 'test', '1112 3rd Ave S', 4, 1, 'Sunday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (55, 'test', '1112 3rd Ave S', 4, 1, 'Monday', '10:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (56, 'test', '309 4th St N', 4, 1, 'Monday', '12:00:00-05', '4th Street Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (57, 'test', '2010 Elm St N', 4, 1, 'Monday', '19:00:00-05', 'Came to Believe Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (58, 'test', '406 8th St S', 5, 1, 'Monday', '19:30:00-05', 'Old Newman Center');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (59, 'test', '1112 3rd Ave S', 4, 1, 'Monday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (60, 'test', '1112 3rd Ave S', 4, 1, 'Tuesday', '07:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (61, 'test', '321 9th St N', 4, 1, 'Tuesday', '12:00:00-05', 'Tuesday Womens Happy Hour');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (62, 'test', '1112 3rd Ave S', 4, 1, 'Tuesday', '13:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (63, 'test', '906 1st Ave S', 4, 1, 'Tuesday', '19:00:00-05', 'Tuesday Night Mens Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (64, 'test', '210 7th St S', 5, 1, 'Tuesday', '20:00:00-05', 'Second Ave Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (65, 'test', '1112 3rd Ave S', 4, 1, 'Tuesday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (66, 'test', '1112 3rd Ave S', 4, 1, 'Wednesday', '07:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (67, 'test', '302 Main Ave', 4, 1, 'Wednesday', '00:00:00-05', 'The New Union Club Step Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (68, 'test', '2511 S University Dr', 4, 1, 'Wednesday', '00:00:00-05', 'Wednesday Big Book Luncheon');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (69, 'test', '1112 3rd Ave S', 4, 1, 'Wednesday', '13:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (70, 'test', '1011 12th Ave N', 4, 1, 'Wednesday', '20:00:00-05', '12X12 Study Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (71, 'test', '1112 3rd Ave S', 4, 1, 'Wednesday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (72, 'test', '1112 3rd Ave S', 4, 1, 'Thursday', '07:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (73, 'test', '21 9th St S', 4, 1, 'Thursday', '12:00:00-05', 'Brown Bag Topic Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (74, 'test', '1112 3rd Ave S', 4, 1, 'Thursday', '17:30:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (75, 'test', '390 4th St N', 4, 1, 'Thursday', '18:00:00-05', 'Newman Center Step Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (76, 'test', '5202 25th St S', 4, 1, 'Thursday', '18:30:00-05', 'Women of Recovery');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (77, 'test', '1112 3rd Ave S', 4, 1, 'Thursday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (78, 'test', '611 37th Ave S', 5, 1, 'Thursday', '20:00:00-05', 'Moorhead Thursday Night');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (79, 'test', '1112 3rd Ave S', 4, 1, 'Friday', '10:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (80, 'test', '309 4th St N', 4, 1, 'Friday', '12:00:00-05', '4th Street Group');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (81, 'test', '1112 3rd Ave S', 4, 1, 'Friday', '17:30:00-05', 'Fargo AA Happy Hour');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (82, 'test', '1112 3rd Ave S', 4, 1, 'Friday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (83, 'test', '1112 3rd Ave S', 4, 1, 'Saturday', '10:30:00-05', 'Fargo AA Womens Meeting');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (84, 'test', '1112 3rd Ave S', 4, 1, 'Saturday', '13:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (85, 'test', '1112 3rd Ave S', 4, 1, 'Saturday', '20:00:00-05', 'Fargo AA');
INSERT INTO public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) VALUES (86, 'test', '1112 3rd Ave S', 4, 1, 'Saturday', '22:30:00-05', 'Fargo AA Candlelight');


--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.notes (id, user_id, note, date, title) VALUES (19, 1, 'working on my assignment', '2020-07-13', 'Monday');
INSERT INTO public.notes (id, user_id, note, date, title) VALUES (78, 1, 'adsfasdfasdf', '2020-07-15', 'Hello ');
INSERT INTO public.notes (id, user_id, note, date, title) VALUES (77, 1, 'lghhgjjlghjl', '2020-07-15', 'glghylghjlhgj');
INSERT INTO public.notes (id, user_id, note, date, title) VALUES (76, 1, 'adsfasdfasdf', '2020-07-15', 'Hello 345546456');
INSERT INTO public.notes (id, user_id, note, date, title) VALUES (31, 1, 'Hello world', '2020-07-15', 'Hello');


--
-- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.organization (org_id, organization) VALUES (1, 'AA');
INSERT INTO public.organization (org_id, organization) VALUES (2, 'NA');
INSERT INTO public.organization (org_id, organization) VALUES (3, 'Other');


--
-- Data for Name: town; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.town (location_id, "City") VALUES (1, 'Detroit Lakes, MN');
INSERT INTO public.town (location_id, "City") VALUES (2, 'Perham, MN');
INSERT INTO public.town (location_id, "City") VALUES (3, 'Frazee, MN');
INSERT INTO public.town (location_id, "City") VALUES (4, 'Fargo, ND');
INSERT INTO public.town (location_id, "City") VALUES (5, 'Moorhead, MN');



--
-- Name: Location_town_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Location_town_id_seq"', 1, false);


--
-- Name: Notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Notes_id_seq"', 81, true);


--
-- Name: Organization_org_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Organization_org_id_seq"', 1, false);


--
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contact_id_seq', 16, true);


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.event_id_seq', 23, true);


--
-- Name: meeting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.meeting_id_seq', 86, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- Name: town Location_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.town
    ADD CONSTRAINT "Location_pk" PRIMARY KEY (location_id);


--
-- Name: notes Notes_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT "Notes_pk" PRIMARY KEY (id);


--
-- Name: organization Organization_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.organization
    ADD CONSTRAINT "Organization_pk" PRIMARY KEY (org_id);


--
-- Name: user Registered users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "Registered users_pk" PRIMARY KEY (id);


--
-- Name: contact contact_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pk PRIMARY KEY (id);


--
-- Name: events event_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT event_pk PRIMARY KEY (id);


--
-- Name: meeting meeting_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meeting
    ADD CONSTRAINT meeting_pk PRIMARY KEY (id);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--
