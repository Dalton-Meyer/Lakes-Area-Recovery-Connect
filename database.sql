
CREATE TABLE public.town (
    location_id integer NOT NULL,
    "City" character varying NOT NULL
);


--
-- TOC entry 208 (class 1259 OID 24734)
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
-- TOC entry 3042 (class 0 OID 0)
-- Dependencies: 208
-- Name: Location_town_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Location_town_id_seq" OWNED BY public.town.location_id;


--
-- TOC entry 213 (class 1259 OID 24755)
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
-- TOC entry 212 (class 1259 OID 24753)
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
-- TOC entry 3043 (class 0 OID 0)
-- Dependencies: 212
-- Name: Notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Notes_id_seq" OWNED BY public.notes.id;


--
-- TOC entry 211 (class 1259 OID 24747)
-- Name: organization; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.organization (
    org_id integer NOT NULL,
    organization character varying(255) NOT NULL
);


--
-- TOC entry 210 (class 1259 OID 24745)
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
-- TOC entry 3044 (class 0 OID 0)
-- Dependencies: 210
-- Name: Organization_org_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Organization_org_id_seq" OWNED BY public.organization.org_id;


--
-- TOC entry 207 (class 1259 OID 24728)
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
-- TOC entry 206 (class 1259 OID 24726)
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
-- TOC entry 3045 (class 0 OID 0)
-- Dependencies: 206
-- Name: contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;


--
-- TOC entry 203 (class 1259 OID 24709)
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
-- TOC entry 202 (class 1259 OID 24707)
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
-- TOC entry 3046 (class 0 OID 0)
-- Dependencies: 202
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.events.id;


--
-- TOC entry 205 (class 1259 OID 24720)
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
-- TOC entry 204 (class 1259 OID 24718)
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
-- TOC entry 3047 (class 0 OID 0)
-- Dependencies: 204
-- Name: meeting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.meeting_id_seq OWNED BY public.meeting.id;


--
-- TOC entry 215 (class 1259 OID 24803)
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
-- TOC entry 214 (class 1259 OID 24801)
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
-- TOC entry 3048 (class 0 OID 0)
-- Dependencies: 214
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 2872 (class 2604 OID 24731)
-- Name: contact id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);


--
-- TOC entry 2870 (class 2604 OID 24712)
-- Name: events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- TOC entry 2871 (class 2604 OID 24723)
-- Name: meeting id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meeting ALTER COLUMN id SET DEFAULT nextval('public.meeting_id_seq'::regclass);


--
-- TOC entry 2875 (class 2604 OID 24758)
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public."Notes_id_seq"'::regclass);


--
-- TOC entry 2874 (class 2604 OID 24750)
-- Name: organization org_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.organization ALTER COLUMN org_id SET DEFAULT nextval('public."Organization_org_id_seq"'::regclass);


--
-- TOC entry 2873 (class 2604 OID 24739)
-- Name: town location_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.town ALTER COLUMN location_id SET DEFAULT nextval('public."Location_town_id_seq"'::regclass);


--
-- TOC entry 2876 (class 2604 OID 24806)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3027 (class 0 OID 24728)
-- Dependencies: 207
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contact (id, contact_name, added_by, contact_type, contact_phone) FROM stdin;
1	NCADD	test	help	1-800-622-2255
2	National Institute on Drug Abuse	test	help	1-800-662-4357
3	SAMHSA	test	help	1-800-662-4357
4	National Suicide Prevention Lifeline	test	help	1-800-273-8255
5	Partnership for Drug Free Kids	test	help	1-855-378-4373
6	National Drug Helpline	test	help	1-844-289-0879
7	Boys Town	test	help	800-448-3000
8	Compassion Treatment Services	test	treat	218-844-5782
9	Lakes Counseling Center	test	treat	218-847-0696
10	Lakeland Mental Health Center	test	treat	218-847-1676
11	Drake Counseling Services	test	treat	218-847-1329
12	Lost & Found Ministry	test	treat	218-287-2089
13	ShareHouse	test	treat	877-294-6561
14	First Step Recovery	test	treat	701-451-4900
15	Face It Together	test	treat	701-566-5631
16	Prairie St. Johns	test	treat	701-476-7200
\.


--
-- TOC entry 3023 (class 0 OID 24709)
-- Dependencies: 203
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.events (id, event_name, event_location, event_date, event_type, event_time) FROM stdin;
13	test2	Fargo ND	2020-07-25	2	12:58:00
19	test3	Perham, MN	2020-07-23	2	14:27:00
20	test4	Detroit Lakes Alano Club	2020-07-16	2	13:28:00
21	test5	Moorhead, MN	2020-07-31	1	05:40:00
22	test5	Detroit Lakes, MN	2020-07-22	3	20:00:00
\.


--
-- TOC entry 3025 (class 0 OID 24720)
-- Dependencies: 205
-- Data for Name: meeting; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.meeting (id, added_by, meeting_address, town_id, meeting_id, meeting_day, meeting_time, meeting_name) FROM stdin;
1	test	827 Summit Ave	1	2	Monday	20:00:00-05	Off The Hook
2	test	43452 Co Hwy 34	2	2	Tuesday	19:00:00-05	Off The Hook
3	test	827 Summit Ave	1	2	Wednesday	20:00:00-05	Off The Hook
4	test	43452 Co Hwy 34	2	2	Thursday	19:00:00-05	Off The Hook
5	test	199 Birch Ave. W	3	2	Thursday	19:00:00-05	Out Of The Ashes
6	test	827 Summit Ave	1	2	Friday	20:30:00-05	Off The Hook
7	test	43452 Co Hwy 34	2	2	Saturday	19:00:00-05	Off The Hook
9	test	121 9th St S	4	2	Monday	12:00:00-05	A Break in the Day
10	test	901 North Broadway	4	2	Monday	18:30:00-05	Sherwood Mens Group
11	test	2801 North Broadway	4	2	Monday	20:00:00-05	Monday Night Candlelight
12	test	121 9th St S	4	2	Tuesday	12:00:00-05	A Break in the Day
13	test	650 2nd Ave N	4	2	Tuesday	18:30:00-05	Poop in a Group
14	test	21 9th St  S	4	2	Tuesday	20:00:00-05	H.O.W Group
15	test	121 9th St S	4	2	Wednesday	12:00:00-05	A Break in the Day
16	test	2101 N Elm St	4	2	Wednesday	12:00:00-05	NA at the VA
17	test	200 5th St S	5	2	Wednesday	19:30:00-05	Just For Today
18	test	121 9th St S	4	2	Thursday	12:00:00-05	A Break in the Day
19	test	906 1st Ave S	4	2	Thursday	20:00:00-05	Its a Good Thing
20	test	121 9th St S	4	2	Friday	12:00:00-05	A Break in the Day
21	test	111 9th St S	4	2	Friday	19:30:00-05	Rainbow Way
22	test	401 40th Ave S	5	2	Friday	21:00:00-05	Friday Night Speaker Mtg
23	test	21 9th St S	4	2	Saturday	09:00:00-05	Living Clean
24	test	1710 5th St S	4	2	Saturday	12:00:00-05	One Page at a Time
25	test	309 4th St N	4	2	Saturday	19:30:00-05	Saturday Addicts Meeting
26	test	610 13th St N	5	2	Saturday	22:00:00-05	NA After Dark
27	test	916 Main Ave	4	2	Sunday	15:00:00-05	She Do Recover
28	test	4227 9th Ave SW	4	2	Sunday	18:30:00-05	Recovery in Motion
29	test	650 2nd Ave N	4	2	Sunday	18:30:00-05	Circle of Recovery
30	test	906 1st Ave S	4	2	Sunday	20:00:00-05	Clean and Free
8	test	827 Summit Ave	1	2	Saturday	22:00:00-05	Candle Light
31	test	827 Summit Ave	1	1	Friday	12:00:00-05	Alano Club
32	test	20996 Co Hwy 20	1	1	Friday	19:30:00-05	St Mary of The Lake Church
33	test	827 Summit Ave	1	1	Tuesday	20:00:00-05	Alano Club
34	test	827 Summit Ave	1	1	Saturday	09:00:00-05	Alano Club
35	test	827 Summit Ave	1	1	Wednesday	18:00:00-05	Alano Club
36	test	827 Summit Ave	1	1	Wednesday	12:00:00-05	Alano Club
37	test	827 Summit Ave	1	1	Thursday	12:00:00-05	Alano Club
38	test	20996 Co Hwy 20	1	1	Saturday	09:30:00-05	St Mary of The Lake Church
39	test	912 Lake St	1	1	Friday	12:00:00-05	First Lutheran Church
40	test	827 Summit Ave	1	1	Tuesday	12:00:00-05	Alano Club
41	test	827 Summit Ave	1	1	Saturday	20:00:00-05	Alano Club
42	test	912 Lake St	1	1	Tuesday	09:00:00-05	First Lutheran Church
43	test	827 Summit Ave	1	1	Thursday	20:00:00-05	Alano Club
44	test	827 Summit Ave	1	1	Sunday	20:00:00-05	Alano Club
45	test	827 Summit Ave	1	1	Monday	12:00:00-05	Alano Club
46	test	43452 Co Hwy 34	2	1	Friday	19:00:00-05	Perham Alano Society
47	test	43452 Co Hwy 34	2	1	Thursday	12:00:00-05	Perham Alano Society
48	test	43452 Co Hwy 34	2	1	Saturday	09:30:00-05	Perham Alano Society
49	test	43452 Co Hwy 34	2	1	Wednesday	19:00:00-05	Perham Alano Society
50	test	43452 Co Hwy 34	2	1	Monday	19:00:00-05	Perham Alano Society
51	test	1112 3rd Ave S	4	1	Sunday	11:00:00-05	Fargo AA
52	test	1112 3rd Ave S	4	1	Sunday	14:00:00-05	Fargo AA First Steps to Sobriety
53	test	21 9th St S	4	1	Sunday	17:30:00-05	Daily Refection Group
54	test	1112 3rd Ave S	4	1	Sunday	20:00:00-05	Fargo AA
55	test	1112 3rd Ave S	4	1	Monday	10:00:00-05	Fargo AA
56	test	309 4th St N	4	1	Monday	12:00:00-05	4th Street Group
57	test	2010 Elm St N	4	1	Monday	19:00:00-05	Came to Believe Meeting
58	test	406 8th St S	5	1	Monday	19:30:00-05	Old Newman Center
59	test	1112 3rd Ave S	4	1	Monday	20:00:00-05	Fargo AA
60	test	1112 3rd Ave S	4	1	Tuesday	07:00:00-05	Fargo AA
61	test	321 9th St N	4	1	Tuesday	12:00:00-05	Tuesday Womens Happy Hour
62	test	1112 3rd Ave S	4	1	Tuesday	13:00:00-05	Fargo AA
63	test	906 1st Ave S	4	1	Tuesday	19:00:00-05	Tuesday Night Mens Meeting
64	test	210 7th St S	5	1	Tuesday	20:00:00-05	Second Ave Group
65	test	1112 3rd Ave S	4	1	Tuesday	20:00:00-05	Fargo AA
66	test	1112 3rd Ave S	4	1	Wednesday	07:00:00-05	Fargo AA
67	test	302 Main Ave	4	1	Wednesday	00:00:00-05	The New Union Club Step Meeting
68	test	2511 S University Dr	4	1	Wednesday	00:00:00-05	Wednesday Big Book Luncheon
69	test	1112 3rd Ave S	4	1	Wednesday	13:00:00-05	Fargo AA
70	test	1011 12th Ave N	4	1	Wednesday	20:00:00-05	12X12 Study Group
71	test	1112 3rd Ave S	4	1	Wednesday	20:00:00-05	Fargo AA
72	test	1112 3rd Ave S	4	1	Thursday	07:00:00-05	Fargo AA
73	test	21 9th St S	4	1	Thursday	12:00:00-05	Brown Bag Topic Meeting
74	test	1112 3rd Ave S	4	1	Thursday	17:30:00-05	Fargo AA
75	test	390 4th St N	4	1	Thursday	18:00:00-05	Newman Center Step Meeting
76	test	5202 25th St S	4	1	Thursday	18:30:00-05	Women of Recovery
77	test	1112 3rd Ave S	4	1	Thursday	20:00:00-05	Fargo AA
78	test	611 37th Ave S	5	1	Thursday	20:00:00-05	Moorhead Thursday Night
79	test	1112 3rd Ave S	4	1	Friday	10:00:00-05	Fargo AA
80	test	309 4th St N	4	1	Friday	12:00:00-05	4th Street Group
81	test	1112 3rd Ave S	4	1	Friday	17:30:00-05	Fargo AA Happy Hour
82	test	1112 3rd Ave S	4	1	Friday	20:00:00-05	Fargo AA
83	test	1112 3rd Ave S	4	1	Saturday	10:30:00-05	Fargo AA Womens Meeting
84	test	1112 3rd Ave S	4	1	Saturday	13:00:00-05	Fargo AA
85	test	1112 3rd Ave S	4	1	Saturday	20:00:00-05	Fargo AA
86	test	1112 3rd Ave S	4	1	Saturday	22:30:00-05	Fargo AA Candlelight
\.


--
-- TOC entry 3033 (class 0 OID 24755)
-- Dependencies: 213
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.notes (id, user_id, note, date, title) FROM stdin;
19	1	working on my assignment	2020-07-13	Monday
78	1	adsfasdfasdf	2020-07-15	Hello 
77	1	lghhgjjlghjl	2020-07-15	glghylghjlhgj
76	1	adsfasdfasdf	2020-07-15	Hello 345546456
31	1	Hello world	2020-07-15	Hello
\.


--
-- TOC entry 3031 (class 0 OID 24747)
-- Dependencies: 211
-- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.organization (org_id, organization) FROM stdin;
1	AA
2	NA
3	Other
\.


--
-- TOC entry 3029 (class 0 OID 24736)
-- Dependencies: 209
-- Data for Name: town; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.town (location_id, "City") FROM stdin;
1	Detroit Lakes, MN
2	Perham, MN
3	Frazee, MN
4	Fargo, ND
5	Moorhead, MN
\.


--
-- TOC entry 3035 (class 0 OID 24803)
-- Dependencies: 215
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."user" (id, username, password, email, user_access) FROM stdin;
1	test	$2a$10$KqXXRqmrBrcQyp.nsVt2HeydQr0qy/3yraD6hXXzGaw7xL8bdF8mG	\N	2
3	dalton	$2a$10$V2IYB/mExOt9lD0hSKIK3uHMv7i//.qjh2HgSwyOrIbqMSeY0Xcw.	\N	1
\.


--
-- TOC entry 3049 (class 0 OID 0)
-- Dependencies: 208
-- Name: Location_town_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Location_town_id_seq"', 1, false);


--
-- TOC entry 3050 (class 0 OID 0)
-- Dependencies: 212
-- Name: Notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Notes_id_seq"', 81, true);


--
-- TOC entry 3051 (class 0 OID 0)
-- Dependencies: 210
-- Name: Organization_org_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Organization_org_id_seq"', 1, false);


--
-- TOC entry 3052 (class 0 OID 0)
-- Dependencies: 206
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contact_id_seq', 16, true);


--
-- TOC entry 3053 (class 0 OID 0)
-- Dependencies: 202
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.event_id_seq', 23, true);


--
-- TOC entry 3054 (class 0 OID 0)
-- Dependencies: 204
-- Name: meeting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.meeting_id_seq', 86, true);


--
-- TOC entry 3055 (class 0 OID 0)
-- Dependencies: 214
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- TOC entry 2885 (class 2606 OID 24744)
-- Name: town Location_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.town
    ADD CONSTRAINT "Location_pk" PRIMARY KEY (location_id);


--
-- TOC entry 2889 (class 2606 OID 24763)
-- Name: notes Notes_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT "Notes_pk" PRIMARY KEY (id);


--
-- TOC entry 2887 (class 2606 OID 24752)
-- Name: organization Organization_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.organization
    ADD CONSTRAINT "Organization_pk" PRIMARY KEY (org_id);


--
-- TOC entry 2891 (class 2606 OID 24809)
-- Name: user Registered users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "Registered users_pk" PRIMARY KEY (id);


--
-- TOC entry 2883 (class 2606 OID 24733)
-- Name: contact contact_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pk PRIMARY KEY (id);


--
-- TOC entry 2879 (class 2606 OID 24717)
-- Name: events event_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT event_pk PRIMARY KEY (id);


--
-- TOC entry 2881 (class 2606 OID 24725)
-- Name: meeting meeting_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meeting
    ADD CONSTRAINT meeting_pk PRIMARY KEY (id);


--
-- TOC entry 2893 (class 2606 OID 24813)
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- TOC entry 2895 (class 2606 OID 24811)
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);

