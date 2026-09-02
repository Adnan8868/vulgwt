// subject-data.js

const deptNames = {
    "ACC": "ACC - Accounting",
    "BIF": "BIF - Bioinformatics",
    "BIO": "BIO - Biological Sciences",
    "BT": "BT - Biotechnology",
    "BNK": "BNK - Banking & Finance",
    "CHE": "CHE - Chemistry",
    "CS": "CS - Computer Science & IT",
    "ECO": "ECO - Economics",
    "EDU": "EDU - Education",
    "ENG": "ENG - English",
    "FIN": "FIN - Finance",
    "GSC": "GSC - General Science",
    "ISL": "ISL - Islamic Studies",
    "MCM": "MCM - Mass Communication",
    "MGT": "MGT - Management",
    "MKT": "MKT - Marketing",
    "MTH": "MTH - Mathematics",
    "PAK": "PAK - Pakistan Studies",
    "PHY": "PHY - Physics",
    "PSC": "PSC - Political Science",
    "PSY": "PSY - Psychology",
    "SOC": "SOC - Sociology",
    "STA": "STA - Statistics",
    "ZOO": "ZOO - Zoology",

};
// Master Subjects Database Array
const subjectsData = [
    // ACC Dept
    {
        dept: "ACC",
        id: "ACC311",
        name: "Fundamentals of Auditing",
        handouts: "1Ahnl52sXEdYoanBECozNyRuM3kj0YtnI",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "ACC",
        id: "ACC501",
        name: "Business Finance",
        handouts: "1TmrMSbWi-ajJ6H2yVrtgtbPQgak8EuaT",
        highlighted: "https://drive.google.com/drive/folders/1AR6yWtbM5zb0reuR2ARakUYq1auREp8n",
        ppt: "not_found.html"
    },

    // BIF Dept
    {
        dept: "BIF",
        id: "BIF101",
        name: "Introduction to Bioinformatics",
        handouts: "1izvvRLUxqO_F5zgJh61r0dGUdNv4efkH",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIF",
        id: "BIF401",
        name: "Bioinformatics-I",
        handouts: "1ICxNTuPrBnrB6W61l70q_zqmzKk475OH",
        highlighted: "https://drive.google.com/file/d/1bqtF548LaFmD8cn4Ma5OtfJDLf5LFYqi/view",
        ppt: "not_found.html"
    },
    {
        dept: "BIF",
        id: "BIF402",
        name: "Ethical and Legal Issues",
        handouts: "1W9c4s3Rv3JTcYEcvROHD_Gi-rEccMvVe",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIF",
        id: "BIF501",
        name: "Bioinformatics-II",
        handouts: "https://drive.google.com/file/d/1JQXyrUPdEHJfg1kY55DNH31Q6Jmsqb4M/view",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIF",
        id: "BIF601",
        name: "Bioinformatics Computing I",
        handouts: "https://drive.google.com/file/d/1LUKZd85GCryh-udgX8g4jXzu6b1Kf1A3/view",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIF",
        id: "BIF602",
        name: "Bioinformatics Computing II",
        handouts: "https://drive.google.com/file/d/13Ew9qhg_aw5TWL70Y7W9qjMXARUZuWby/view",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIF",
        id: "BIF731",
        name: "Advanced Bioinformatics",
        handouts: "https://drive.google.com/file/d/11fdoBEP8C9AQNoYHlNnnPwTVU9EC2pH0/view",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    // BIO Dept
    {
        dept: "BIO",
        id: "BIO101",
        name: "Basic I-Biology",
        handouts: "1RuXdIVS8UpbcCoGeZw6MUaHTxeMh5JVp",
        highlighted: "https://drive.google.com/uc?export=download&id=1RuXdIVS8UpbcCoGeZw6MUaHTxeMh5JVp",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO102",
        name: "Basic II-Chemistry",
        handouts: "",
        highlighted: "",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO201",
        name: "Cell Biology Introduction",
        handouts: "1I2f-91LqPNjb8-jw2Sl1AFF6YspL9WeR",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO203",
        name: "Methods in Molecular Biology",
        handouts: "",
        highlighted: "",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO202 | BIO504T",
        name: "Biochemistry-I",
        handouts: "1Gmfxa4S79opcDLIt_RtqM7-Y15kFWuP9",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO204",
        name: "Principles of Biochemical Engineering",
        handouts: "",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO301 | BIO505T",
        name: "Essentials of Genetics",
        handouts: "1SANg7-1aRxPf_hqS4ZOkPzcy73hsW7HG",
        highlighted: "https://drive.google.com/file/d/1j5A-Pff-r4m7LSh_48oZ3NlC_Rp-XG-i",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO302",
        name: "Molecular Biology",
        handouts: "1OI4Q74i9kbuIpSmofxIcnlTZeLU2O03F",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO303",
        name: "Biochemistry-II (Advanced)",
        handouts: "1U5WNr4CN0ypfgDivIwk6TVkVGqmHucCy",
        highlighted: "#",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO401",
        name: "Introduction to Bio Statistics",
        handouts: "1Nj7tUV3vKx6XoIKpdyFFaihCmdKaV",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO502",
        name: "Genomics",
        handouts: "1-y_mlFNv9l92YV_4krz_0mXZWzGm41gU",
        highlighted: "#",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO503",
        name: "Biological Physics",
        handouts: "1pdvhl0JosYSmZ-kHJ4z65Ds3Fpfspkn1",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO5105",
        name: "Cell Biology",
        handouts: "1IcUaj04DJtqfz9MQ7qfHbudokB0Dvh8s",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "MB502 | BIO731",
        name: "Molecular Biology",
        handouts: "1kk_6ADzKx_ycKhpWaTYKlq6N54pqUGKl",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BIO",
        id: "BIO732",
        name: "Genetic Engineering",
        handouts: "128fKE_YbnxOj2a8H28LH-iZzlu8wToLZ",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    // BNK Dept
    {
        dept: "BNK",
        id: "BNK601",
        name: "Banking Laws and Practices",
        handouts: "1iZZA-PoK6-hRTRwnykerZ27qzxa4TipT",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BNK",
        id: "BNK603",
        name: "Consumer Banking",
        handouts: "1CCkzAj4s4YbjNvsDdx8O0xot0AdM_mrf",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BNK",
        id: "BNK604",
        name: "Management of Financial Institutions",
        handouts: "120UtiZ5tkUE4_aZbs5oQvJglNb90fcxQ",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BNK",
        id: "BNK610",
        name: "Islamic Banking Practices",
        handouts: "1pw54rueGW4qMf56J2L3QzRD0oXaHjdKk",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "BNK",
        id: "BNK612",
        name: "Financial Jurisprudence in Islam",
        handouts: "1inriTfPK6PH2eIlIpVH8yP418Ib8QfSR",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },


    // CHE Dept
    { dept: "CHE", id: "CHE201", name: "Physical Chemistry", handouts: "1RzfMUgqYur8gwT6W_xx8yTsVhkMZfFww", highlighted: "not_found.html", ppt: "not_found.html" },

    // CS Dept
    { dept: "CS", id: "CS001", name: "Computer Proficiency License", handouts: "https://drive.google.com/file/d/16ImmGYzNg_nmkPBOletb68HzBnFuMIg-/view", highlighted: "1fFxksRZwJT6zGojaQSRPWzxvh6pbctJK", ppt: "not_found.html" },
    { dept: "CS", id: "CS101", name: "Introduction to Computing", handouts: "1r2xzDmFNQo8M-ffuzdSJ2PAycIz_jaL8", highlighted: "https://drive.google.com/drive/folders/11yMEjOXAJEgGgB3fPW3rQaW3XOqAmyrU", ppt: "not_found.html" },
    { dept: "CS", id: "CS201", name: "Introduction to Programming", handouts: "1vSW7ajSdV6NkTGfFZuHo8dxE30ZqLtoi", highlighted: "https://drive.google.com/drive/folders/17eM3SAEiCBOyNd-INQsAuqtSFII9AtSv", ppt: "not_found.html" },
    { dept: "CS", id: "CS202", name: "Fundamentals of Front End Development", handouts: "1pE65qNopOsQcw02A5lLuMSEBYwrT273M", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS204", name: "Cyber Law", handouts: "1eIBdHMamhLf03070V8A-jchwjPPIl-R_", highlighted: "https://drive.google.com/drive/folders/1n4q3f68yiAwLZ3A7hjee4vjX3LT_TI1J", ppt: "https://drive.google.com/file/d/1DxtgWkSxmlj9HsfKMVgfgIe_jQtpKKJs/view" },
    { dept: "CS", id: "CS205", name: "Information Security", handouts: "1LKR2pcbJjOKBYxNdFvrkiz9jNboy-DS6", highlighted: "https://drive.google.com/drive/folders/1bnr8VJETywsgLHY2QVUyrvn9OhYG1oi0", ppt: "https://drive.google.com/file/d/1VyKMDhkOddpa3knFUatD2oHozkZiELca/view" },
    { dept: "CS", id: "CS301", name: "Data Structures", handouts: "1-N8_ddH9IJF93--pMzhkgqnbEi8lGAi9", highlighted: "https://drive.google.com/drive/folders/1_tTenyQbgHZFSzHSiquiuDVAnrRzvJsG", ppt: "not_found.html" },
    { dept: "CS", id: "CS302", name: "Digital Logic & Design", handouts: "1vqiH0KUgKwu7AJzEihaUSuxtlx24yEva", highlighted: "https://drive.google.com/drive/folders/1FSRgNfPZgX0A2-VF5Oo5kaF6Ft6zjD_i", ppt: "not_found.html" },
    { dept: "CS", id: "CS304", name: "Object Oriented Programming", handouts: "1g1Mbm1uBn2JH1eBOkAiEEw0vjf0MAX3-", highlighted: "https://drive.google.com/drive/folders/1dUV6yyxA8dXNYwfBlDmvx3_WmJ5Dxk9-", ppt: "not_found.html" },
    { dept: "CS", id: "CS311", name: "Web Services Development", handouts: "163fs8TgkKBJGlsvV5GOPMtDwmYxr4eJ7", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS312", name: "Database Modeling and Design", handouts: "1nDpK70rA8nB8BwdVtIkyoytyCwiMkA9k", highlighted: "https://drive.google.com/drive/folders/1RwTXw8VVH2AxX1swTkRjASq4HcnkPA9Q", ppt: "not_found.html" },
    { dept: "CS", id: "CS315", name: "Network Security", handouts: "1b7Fn0ZQLN53xNQUvu_0K5sQaKrrxLEVB", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS401", name: "Assembly Language Programming", handouts: "12gXxDYwrV1NABFID-poki8XFO5Nxiski", highlighted: "https://drive.google.com/drive/folders/1srf0YfO45v0VKLfKomu3RdPMSAc2ugoC", ppt: "not_found.html" },
    { dept: "CS", id: "CS402", name: "Theory of Automata", handouts: "1QO8oKDC2VlqkBuHFBQl6N3tPWM5gXYyX", highlighted: "https://drive.google.com/drive/folders/1SQ_KceBd6QWydWiiIPrBDWSianhFEnK7", ppt: "not_found.html" },
    { dept: "CS", id: "CS403", name: "Database Management System", handouts: "1dg-c25Zm2AgS2CK7uqv_x3C8xpv--eaU", highlighted: "https://drive.google.com/drive/folders/11VUndHop-gwsTzw87ZByaTrZAzkaUBiT", ppt: "not_found.html" },
    { dept: "CS", id: "CS405", name: "Oracle 11g Programming", handouts: "1CzvD77mFOE9hixkSWLnRJ1IWK9LqmO2V", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS407", name: "Routing and Switching", handouts: "1IX0hiU6r0sVEJPb7lC5Vu2aMaofHV4AA", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS408", name: "Human Computer Interaction", handouts: "1XmTpw_7bIwBKQpuAxwzOVhs1ZnU5_3WP", highlighted: "https://drive.google.com/drive/folders/1c2f5kzpGdHlHO3V8NTTBLSbUEq-Nj9R3", ppt: "not_found.html" },
    { dept: "CS", id: "CS409", name: "Database Administration", handouts: "1R4AKwlAWZbYcRCGCc29zq_TeRmV7WTXF", highlighted: "https://drive.google.com/drive/folders/1L2l5wcJM9qjU0ELtA84UmKlcaNRAkdZ4", ppt: "https://drive.google.com/file/d/1h01zzZbs3fQVMuiY_eDAjxaY8Bxay4mS/view" },
    { dept: "CS", id: "CS411", name: "Visual Programming", handouts: "1SIssIJkn1P2Dmikm8NmUcxTYd7YxNuCs", highlighted: "https://drive.google.com/drive/folders/1musuJCffN7ckR_5D651khuywOvn5-gL9", ppt: "not_found.html" },
    { dept: "CS", id: "CS420", name: "Mobile Web Development", handouts: "18m7Y94Irb8UhLX4UZswbU_MeynThFGtG", highlighted: "https://drive.google.com/drive/folders/17zZ-VKwRQc6_VtVBhP-O-DqagtugV6xG", ppt: "not_found.html" },
    { dept: "CS", id: "CS432", name: "Network Modeling & Simulation", handouts: "1iKIl3ye2_Yz-b43PG-orG9TvK0ok1BBs", highlighted: "https://drive.google.com/drive/folders/1OcFpM6xpn2XmBVFKnIKWP2ypGXr3YjJg", ppt: "not_found.html" },
    { dept: "CS", id: "CS435", name: "Cloud Computing", handouts: "1xPBbXCqJVxKcGzHUDD32wRrfq25LoKoJ", highlighted: "https://drive.google.com/drive/folders/11719rS7Cak_Lgqe8seSFh8ZPWoI7_ElZ", ppt: "not_found.html" },
    { dept: "CS", id: "CS442", name: "Introduction to Data Science", handouts: "1WTmy0GMTVjtzwcZELKGxwUHftjteWD4u", highlighted: "not_found.html", ppt: "https://drive.google.com/file/d/1WTmy0GMTVjtzwcZELKGxwUHftjteWD4u" },
    { dept: "CS", id: "CS501", name: "Advance Computer Architecture", handouts: "1JJ_hMVKPNoJKUcrXsClTLmmcd5fPNUR3", highlighted: "https://drive.google.com/drive/folders/1gccP84wZwW0GvwrUMy6cgKJ2jD8JJgH1", ppt: "not_found.html" },
    { dept: "CS", id: "CS502", name: "Algorithms Design & Analysis", handouts: "1EiHQLxRkA1Itq5DWA9WlKAHN57erm5tN", highlighted: "https://drive.google.com/drive/folders/163Grrqk28VnJCnR1pxXv8sZiz9Gzv-hY", ppt: "not_found.html" },
    { dept: "CS", id: "CS504", name: "Software Engineering – I", handouts: "1ta8_GTmXipOw1m-2EqKK9ZBlSiR-kUY3", highlighted: "https://drive.google.com/drive/folders/16vE7_L4Mbu_A8j-s0DHrDXG1ZkyVEDdf", ppt: "not_found.html" },
    { dept: "CS", id: "CS505", name: "Introduction to Virtualization", handouts: "1XW_ZWG2ypDCeIOpXIOWSi41Shmf76f1t", highlighted: "https://drive.google.com/file/d/1XW_ZWG2ypDCeIOpXIOWSi41Shmf76f1t/view", ppt: "not_found.html" },
    { dept: "CS", id: "CS506", name: "Web Design and Development", handouts: "1j1gX5aIHHkvpWfLwIMqm4epnJfzxnQAT", highlighted: "https://drive.google.com/drive/folders/1wSIp3R0jmuU6BmuNbNA7pAEJd1xeoM9j", ppt: "not_found.html" },
    { dept: "CS", id: "CS507", name: "Information System", handouts: "1dlRfeoEE-TFJBXiJUBGSjUqAbtIYVwJI", highlighted: "https://drive.google.com/drive/folders/1PF_DGVRU8PbRHDqZIlr_a6PqoF8n1DZu", ppt: "not_found.html" },
    { dept: "CS", id: "CS508", name: "Modern Programming Languages", handouts: "1Y5d_uuMseD6glF74yG5YlMskZ8YuSByr", highlighted: "https://drive.google.com/drive/folders/1dLvD79ml76t33JbIHmBqV5e0uj_EhRPY", ppt: "not_found.html" },
    { dept: "CS", id: "CS510", name: "Software Specification", handouts: "1qAzhhmDfIuUFjZL6m00JfFeX7L9hw4DD", highlighted: "https://drive.google.com/drive/folders/1ipaB1nM4vzTjyop1E2BnnIB8LWDjNndJ", ppt: "not_found.html" },
    { dept: "CS", id: "CS511", name: "Web Engineering", handouts: "https://drive.google.com/drive/folders/18UbNu8DOBGE7QvV2URaVtBwSbvxDBKKv", highlighted: "https://drive.google.com/drive/folders/18UbNu8DOBGE7QvV2URaVtBwSbvxDBKKv", ppt: "not_found.html" },
    { dept: "CS", id: "CS601", name: "Data Communication", handouts: "1u_4mNALdFK6uIdN4Ma2O6xCLLXiM3Nn0", highlighted: "https://drive.google.com/drive/folders/1HykBN-oph0dognk6AD7rJvrnapDwR2Zg", ppt: "not_found.html" },
    { dept: "CS", id: "CS602", name: "Computer Graphics", handouts: "1YGIuo6OJ4c8OJkiKLtmdwwIDPJTo1Mj4", highlighted: "https://drive.google.com/drive/folders/1MmNukuN4Tv97_VBeUnQY9TWHUSYISeBG", ppt: "not_found.html" },
    { dept: "CS", id: "CS603", name: "Software Architecture", handouts: "not_found.html", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS604", name: "Operating System", handouts: "1i9D54AhB1HIVRxofAgStmkgm6Lwq3o3A", highlighted: "https://drive.google.com/drive/folders/1vmQApQohYyycJH1uyiBCaJgplXNgcOiH", ppt: "not_found.html" },
    { dept: "CS", id: "CS605", name: "Software Engineering-II", handouts: "1d7P0YH1pfMlquLozoXqzzG9JG3-4yUkv", highlighted: "https://drive.google.com/drive/folders/1x-4BbdEhDI9fdDR3haDnnq_yPIkNHnEL", ppt: "not_found.html" },
    { dept: "CS", id: "CS606", name: "Compiler Construction", handouts: "1Xt8egZ1k4Xw77v9Qr3yM7fk5URHr0z6d", highlighted: "https://drive.google.com/drive/folders/1EqV6c3qP7pzO81vXMWNuC9-vqImMxEV6", ppt: "not_found.html" },
    { dept: "CS", id: "CS607", name: "Artificial Intelligence", handouts: "1OHbV31CljXEC5jgegd2YKJVpUHNSrYO1", highlighted: "https://drive.google.com/drive/folders/1vTHx7-n1ysQKAqFGarV5wGasEJkgCPS9", ppt: "not_found.html" },
    { dept: "CS", id: "CS608", name: "Software Verification & Validation", handouts: "1-Ma40JpK1w07pU5kiLatUhGfDpIKWN1m", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS609", name: "System Programming", handouts: "1oRUHjRr7HAG_vSW0OKe5zAOloVcoUkS8", highlighted: "https://drive.google.com/drive/folders/1W2GOJ_7UE1zmYkAxu2H3-iEunkQX4VhO", ppt: "not_found.html" },
    { dept: "CS", id: "CS610", name: "Computer Networks", handouts: "1k6sAGLfKIX2KimMuax9CixTa5htpvc4t", highlighted: "https://drive.google.com/drive/folders/1Gg6SxzxGofXuO0pXp0RigQLPvqRSlbX0", ppt: "https://drive.google.com/file/d/1N45uEer2tyz1_e5KPG8_2IOw_YIzQ9bq/view" },
    { dept: "CS", id: "CS611", name: "Software Quality Engineering", handouts: "1KsLO-DcPMjByUnqvB7nOn0F8dLKwq43c", highlighted: "https://drive.google.com/file/d/1EjG1UzTlaBG-klp3i5R3yeWKHaJFJWlZ/view", ppt: "not_found.html" },
    { dept: "CS", id: "CS614", name: "Data Warehousing", handouts: "1HC3LD4j6vlmQJzwyPfcEquMhbAanaZMT", highlighted: "https://drive.google.com/file/d/1bO5q3rlP0MXQoa2UCKfnOpB5fLXiSE-H/view", ppt: "not_found.html" },
    { dept: "CS", id: "CS615", name: "Software Project Management", handouts: "1JY0_3cGuOmYMfk9eFNCBBEuUMjUCCsPw", highlighted: "https://drive.google.com/drive/folders/1Fx8qlxWioEPQ2Y1wdkRj9hYgEz-cl9t_", ppt: "not_found.html" },
    { dept: "CS", id: "CS620", name: "Modeling & Simulation", handouts: "https://drive.google.com/drive/folders/1nygHEDjjN49KP3dBX3mWey0T4UrRNn2f", highlighted: "https://drive.google.com/drive/folders/1nygHEDjjN49KP3dBX3mWey0T4UrRNn2f", ppt: "https://drive.google.com/drive/folders/1nygHEDjjN49KP3dBX3mWey0T4UrRNn2f" },
    { dept: "CS", id: "CS621", name: "Parallel Computing", handouts: "https://drive.google.com/drive/folders/11s7wRV9y4e8S_HVDhTm6M6JnTU1slwz1", highlighted: "https://drive.google.com/drive/folders/11s7wRV9y4e8S_HVDhTm6M6JnTU1slwz1", ppt: "https://drive.google.com/file/d/1dtdKNGNKHPihjqSX5XXXO0Lfas4ORvff/view" },
    { dept: "CS", id: "CS625", name: "Professional Practices", handouts: "1Vz5a9DZL-G9CFqFhNCanQxuG-mWOrhnQ", highlighted: "https://drive.google.com/drive/folders/1Oq4LwMDZm77JxmEgLnDz4vd8mbhZPcxB", ppt: "not_found.html" },
    { dept: "CS", id: "CS636", name: "Formal Methods", handouts: "https://drive.google.com/file/d/1VmOj-f1kc_dM8AA9z3hsYDACVdhnTRaO/view", highlighted: "https://drive.google.com/file/d/1QB9xhksVb1ehNYoKUcfNa4zboEtvTsmx/view", ppt: "not_found.html" },
    { dept: "CS", id: "CS701", name: "Theory of Computation", handouts: "https://drive.google.com/file/d/1Zudg5e6dWlJvTWr7iaLuETq1QllV66Wz/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS702", name: "Advanced Algorithms", handouts: "https://drive.google.com/file/d/1nUnuYQbble_Mgv3vaSe0OBR5SqMeLwDh/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS704", name: "Advanced Architecture", handouts: "https://drive.google.com/file/d/1-cxt4MVCQQDJen7_f6N2-RK20otcNHVY/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS711", name: "Software Design", handouts: "https://drive.google.com/file/d/1uLSyo_nEPiwF3ReMOS-LAxL4M02Ex-Ep/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS718", name: "Wireless Networks", handouts: "https://drive.google.com/file/d/1FljAxEkI6OUbRHTLrC04A6Ws5bGDkmxP/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS724", name: "Software process Improvement", handouts: "https://drive.google.com/file/d/1k65C8GeBAPg-g2l8c1zwZHxtpHdIu6zA/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "CS", id: "CS726", name: "Information Retrieval", handouts: "https://drive.google.com/file/d/15ObB0_ZbuV7QGVnUXI_xLzAfYnHKnDsN/view", highlighted: "not_found.html", ppt: "not_found.html" },

    // ECO Dept
    { dept: "ECO", id: "ECOO401", name: "Introduction to Economics", handouts: "1k6g0-FyKZXSXWL7n8_OZ2z6d0nNDDU8v", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO402", name: "Micro Economics", handouts: "1bp-P7uBkLTAWdXoL7eYpQABbidSvVZx7", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO403", name: "Macroeconomics", handouts: "1jacZ_RiPspsAnr7WiMS1kQG9vW9rNMXU", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO404", name: "Managerial Economics", handouts: "1fHgn90v0tSLPXzCCQn5UYlkKT_KNWChI", highlighted: "", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO501", name: "Development Economics", handouts: "1mkmEPQSHjbfDRiuAbWs41WGomMa5EYnd", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO601", name: "Business Econometrics", handouts: "10tripUcXSmNUd6RY4_HMSQs0zt_N9RnQ", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO605", name: "Financial Economics", handouts: "14lReE9BHvjAfdsb6NKekCxamI_KXdr7A", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO606", name: "Mathematical Economics I", handouts: "101EgC8db79ADrBwesMiNAVbkhtDBvHq3", highlighted: "https://drive.google.com/file/d/1OOlw7mvtHLubOLbLIl4-rJ0b26U-Hh9m/view", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO607", name: "Mathematical Economics II", handouts: "19NVxmGljS7K8dvsNzVzL1fi7Yho3eTY_", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO610", name: "Issues in Pakistan Economy", handouts: "1fxo9C0g007zlfEMVLlYe8aBUkaPFduzS", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "ECO", id: "ECOO612", name: "Population Economics", handouts: "1cwNQJccpZkqNa-vjDgFKq5pr2zJv4Ov7", highlighted: "not_found.html", ppt: "not_found.html" },

    // EDU Dept
    { dept: "EDU", id: "EDU101", name: "Foundations of Education", handouts: "16TkwNibadi8kOa8tCb37-2qKRG4LYe1m", highlighted: "https://drive.google.com/drive/folders/1S1YV3HM_I78IMV49lwszvkWHXS73MG-r", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU201", name: "Learning Theories", handouts: "1vSbeTvhyMzu-hVVEY29wm1nymOgHJwCd", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU301", name: "General Methods of Teaching", handouts: "1qjYsRGNDRsYkAFc1Aliiute3MNBrJzk_", highlighted: "https://drive.google.com/uc?export=download&id=1cBvfSv7-WmtXnc4KF9no-sNjf5fjXpal", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU302", name: "Human Development and Learning", handouts: "1iVICWuAadFOQu7lTnxPsX2rWx9QC_cNI", highlighted: "https://drive.google.com/uc?export=download&id=1wGFl8kZVtHdAagCz2Vpg5SV92QbosDjg", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU303", name: "Child Development", handouts: "1tbqS12WTcflnXe9Fqwzjru0qSi6kmqWS", highlighted: "https://drive.google.com/uc?export=download&id=15x_J4I-UBjA47ttUik6VSwNYJp1X93k0", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU304", name: "Student Guidance and Counselling", handouts: "1BjI_cNPjWjXqyLz9acn5oy8h8F20Ibi9", highlighted: "https://drive.google.com/drive/folders/1_jVVldSs-MPQL5tjgaK7x7EpMB50g49g?usp=drive_link", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU305", name: "Classroom Management", handouts: "1WcFzujXupwGT_OdeEP3yScWHI7XQIb9x", highlighted: "https://drive.google.com/uc?export=download&id=12m6mLNY_2FmoHfcItix4FnE2NPvzTtu7", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU401", name: "Contemporary Issues and Trends in Education", handouts: "https://drive.google.com/drive/folders/1Ep9MyNfPLdc_MY_hcpWUQLRhwDwgzXJ6?usp=drive_link", highlighted: "https://drive.google.com/drive/folders/1cAuOnkYUA4WeMvLPNWwY2PXDv1tukM6w", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU402", name: "Curriculum Development", handouts: "1MFe5sjrAkxi4mdXc-pZg_ktHRbKNBmA2", highlighted: "https://drive.google.com/file/d/1ZXAlhlnM8y4nYxwZA4Ctu8fFD-gqcV2G", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU403", name: "Art Craft and Calligraphy", handouts: "1AXGjmKM05qhhEa_evIQBwondFsFFWabl", highlighted: "https://drive.google.com/drive/folders/1eWM51s-Lm4KDEvNxSDIgjz2qVvSGh5m8?usp=drive_link", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU404", name: "Classroom Testing and Evaluation", handouts: "1pG-0J2yVVLrC5tyW5_YYHzg09a5jqecx", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU405", name: "Classroom Assessment", handouts: "1P7AH_i9IhQRTj6vGN8qnAJoGS_Jn-lZn", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU406", name: "Critical Thinking and Reflective Practices", handouts: "1gVmg8FZve-O5eq2voQYly1R6aTEQYxtZ", highlighted: "https://drive.google.com/drive/folders/18uM7iNSIkpYcM5jM0ssWNM5w2ka2wjiA", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU409", name: "Teaching of Literacy and Language", handouts: "19xsBF7HTowCt1wKo32Kusi7bv4aaPIe1", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU410", name: "Teaching of Literacy Skills", handouts: "1VWlAXDj8oc7bO3ypd5CMldz6yLRUUw05", highlighted: "1EGBtRll9mxglKWaguGjwBLZg3F958SSQ", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU411", name: "تدریس زبانِ اردو", handouts: "1Qim0_5j4HqkQ-Ul_4Zl4edAS5wIFHcHX", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU430", name: "Information Technology in Education", handouts: "183shV9Kqt2XAbA-ODD9p54-pGBaGXUK8", highlighted: "https://drive.google.com/drive/folders/1UE-bw2t_NdyZw2dBWKHaNWPg6RJZjtRp", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU431", name: "Test Development and Evaluation", handouts: "1RddK8C9IwyMkgLzuzZzWam4d0njbSrBX", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU433", name: "Professionalism in Teaching", handouts: "1xlCoqSI2WmYch0sYZy31vuCfSx0fvomZ", highlighted: "https://drive.google.com/file/d/1OOmgMih5mV327zZmYRbFoS9IpwdnxLjJ", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU501", name: "School Community and Teacher", handouts: "1VxnBoe3zdzfbpbyBtOi44vH0m38mktns", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU505", name: "Educational Development in Pakistan", handouts: "1TpduwOYeY7WKYfWzE4E2MpSqlBF-2SUw", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU510", name: "Teaching of Mathematics", handouts: "16u_3uP83X87PP3GlB-Ff7PMSiCoTlIqc", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU512", name: "Teaching of Islamic Studies", handouts: "1M6WijWM_1B1syGQzaQ140_jSViGtd7u4", highlighted: "1sDREUxTJ0XAxLCWwpHxI7i8h2_-kwZxL", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU515", name: "Teaching of Geography", handouts: "1oH_dyHZtMv1Cqo8vnWD5xhuGb8uFxp7L", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU516", name: "Teaching of English", handouts: "1Nq3cZE5viN2nl7iTZvnicmBIopFIwbze", highlighted: "https://drive.google.com/drive/folders/1ne4YCe8JbSjPHBkAO4WPinEKHf_oROhm", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU601", name: "Philosophy of Education", handouts: "18g6sURD5X9lKMqbZomIGpjaPdZVxf1W7", highlighted: "https://drive.google.com/file/d/1KpRpksnDAT4Ol5Wzko0yZkGu7dv_2GPr", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU602", name: "Educational Leadership and Management", handouts: "1i0iKhCFc1Pcbo2j6maApkUnWwlRc9hlK", highlighted: "https://drive.google.com/file/d/1hB7cMGqULR2BLqWL8w1hP5o8pW0HNCuc", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU603", name: "Educational Governance: Policy & Practice", handouts: "1xW4153QiFU2bqQIIKaTAa1h8Z4shJrlp", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU604", name: "Comparative Education", handouts: "11X3zCXRGKKMhNIENDzdraaY16piCw0MP", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU654", name: "Addressing Problems of Learning through Pedagogy & Technology", handouts: "1MnEBNPhSEYZGJ3gcBDq8QQhKGxP9OEf_", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "EDU", id: "EDU712", name: "Quantitative Research Methods", handouts: "1myBcCbCqg_lll6f8hLTw_ptFAXRFxeFp", highlighted: "not_found.html", ppt: "not_found.html" },

    // ENG Dept
    { dept: "ENG", id: "ENG001", name: "Elementary English", handouts: "1EZ9mSH4NMZw0Ea7tDJK1g5g3iiurQRnj", highlighted: "not_found.html" },

    { dept: "ENG", id: "ENG101", name: "English Comprehension", handouts: "1oUU7yD_761Y62eiuj1KOkzYA6sJyF65H", highlighted: "https://drive.google.com/drive/folders/1II6te3MZQUHwLo0_ERTPfHPiFqF-U057" },

    { dept: "ENG", id: "ENG201", name: "Business and Technical English", handouts: "18uuwE2AZns7YHZPJJPTplU0ktgvxUGQZ", highlighted: "https://drive.google.com/drive/folders/1DMKOzXB76VtRnMQUFrrnQw0pPBN-0lAM" },

    { dept: "ENG", id: "ENG301", name: "Business Communication", handouts: "1wQ6ge7H2zGNqq6-ZagyUoXAl4uqDmA-3", highlighted: "https://drive.google.com/drive/folders/1r1kbCyJ1t1TcdgpcUhHKib6MJ8m8axaZ" },

    { dept: "ENG", id: "ENG501", name: "History of English Language", handouts: "1cvUGCYh2SXjC-nii3P78VPRBmG08s70Q", highlighted: "https://drive.google.com/drive/folders/1lugzC5sWzgancnWbgY1Ydi5Xe74uGA2C" },

    { dept: "ENG", id: "ENG502", name: "Introduction to Linguistics", handouts: "1em2YBMIISiEC-mnp2EMtYLeJhnvH-mMr", highlighted: "https://drive.google.com/drive/folders/1oHho4dtGnZxTGGwLNX0_8gCYFo_8Bp9y" },

    { dept: "ENG", id: "ENG503", name: "Introduction to ELT", handouts: "1lrhXGXIKRqR-KYOHSrHwZqwd3gWOSM56", highlighted: "https://drive.google.com/drive/folders/1gdAGCcTvJAwj55a6eg8L0659IUfSsNo5" },

    { dept: "ENG", id: "ENG504", name: "Second Language Acquisition", handouts: "1XcHxPNhibM677cLYuNl8wRgBSTDusFlS", highlighted: "https://drive.google.com/drive/folders/1c-wqy0d2RyWbjeAo53Wt7U0QhwLbfIfy" },

    { dept: "ENG", id: "ENG505", name: "Language Learning Theories", handouts: "1YACzWuKyCyagVDQmBLmo0OVEux3abmEN", highlighted: "https://drive.google.com/drive/folders/1OsFpSYlg5pKGTVa-HlvH1ARM5-RsrkzH" },

    { dept: "ENG", id: "ENG506", name: "World Englishes", handouts: "1taS0axoOsedpU163k8fGhAqxeoc3hp34", highlighted: "https://drive.google.com/drive/folders/1RUjVCekUXBLHp2vjLzfnAQJectQG7bBP" },

    { dept: "ENG", id: "ENG507", name: "Phonetics and Phonology", handouts: "1dp_rlmSJoVMNqm4e1Lqto4_OVg2Nseki", highlighted: "https://drive.google.com/drive/folders/130yIam2ZmVd73Ass4YjAXQ4mbnJrEA2O" },

    { dept: "ENG", id: "ENG508", name: "Semantics and Pragmatics", handouts: "1l82Ju8jhNWaa2SQFVqYZAZq1J-n2R_Ly", highlighted: "https://drive.google.com/drive/folders/1nggruhu0oWrYJH73Fzyu98ZPv6L0JpUk" },

    { dept: "ENG", id: "ENG509", name: "Morphology and Syntax", handouts: "1fAx8GEYUulT-Tgong3185frwtgMnySsl", highlighted: "https://drive.google.com/drive/folders/1L4SDEltjCI6mBVBebbzgKjsHIqntsQQo" },

    { dept: "ENG", id: "ENG510", name: "Sociolinguistics", handouts: "1K3HBgK83Bzf3Ty_svNB8gGGAe7w95rSO", highlighted: "https://drive.google.com/drive/folders/1GcOCIUO8_kSwuIenFX5wK-EWr484iq-b" },

    { dept: "ENG", id: "ENG511", name: "Psycholinguistics", handouts: "14ZmjJVG0LMLW_Izy1yvGK6uePTD3l-zE", highlighted: "https://drive.google.com/drive/folders/1_0vyxQ24yqWI8onjarqD_rwtBORPOUwh" },

    { dept: "ENG", id: "ENG512", name: "Bilingualism", handouts: "1md8D98ZXUBzUkUGKOdSXniVwS7RpCPjC", highlighted: "https://drive.google.com/drive/folders/1RTDxFWCl5LAQdpf18NbglSDWPAAklUp5" },

    { dept: "ENG", id: "ENG513", name: "Language Teaching Methods", handouts: "1c8I8zMqJbiDM4ayfYsDvDbWl3S6aXPVv", highlighted: "https://drive.google.com/drive/folders/1vJ_Dk9KR45XfKn0pb-5Ed9dY6Mgw9SHi" },

    { dept: "ENG", id: "ENG514", name: "Teaching Listening and Speaking Skills", handouts: "1FO0-EmpH17t3heSI4WgzOy9un35dzene", highlighted: "https://drive.google.com/drive/folders/1hrJmqy17GQUaPWYkdZLs3d2omwqxlhGz" },

    { dept: "ENG", id: "ENG515", name: "Teaching Reading and Writing Skills", handouts: "1Rtxy56_qbj_3OAItEVYxxz9NcQyMByxb", highlighted: "https://drive.google.com/drive/folders/1mGQNXepoIBz4-gDtutne25rDSbbhayCB" },

    { dept: "ENG", id: "ENG516", name: "School Teaching of Business Communication", handouts: "1C0nZ0Wp6fUJdU52ZElowSh3sF4Js3P49", highlighted: "https://drive.google.com/drive/folders/1R8pFgAvat590lNReDx9IoS5yYRZdlApg" },

    { dept: "ENG", id: "ENG517", name: "Computer Assisted Language Learning", handouts: "1_gfo5lZ6DyT1cHrOFwFRCvqa5GN37CB-", highlighted: "not_found.html" },

    { dept: "ENG", id: "ENG518", name: "Research Methodology", handouts: "1qLRoskDqYap5SSxneclEJnZEoUCk_ziS", highlighted: "https://drive.google.com/drive/folders/1tGUAmZYQTcY1MakgMf25gNedxWm1-qIB" },

    { dept: "ENG", id: "ENG519", name: "Curriculum Design", handouts: "1-2TF_FPGBRyXR91o-8D_Vk-lf_HzmSf5", highlighted: "not_found.html" },

    { dept: "ENG", id: "ENG520", name: "Testing and Assessment", handouts: "18G5stqVMhSfnP5n6Aihg2AEV3w8INhb5", highlighted: "https://drive.google.com/drive/folders/1oxMIRgNIEt0plpHOfcrAhg_CV35IzU7v" },

    { dept: "ENG", id: "ENG521", name: "Language Classroom Management", handouts: "1qzJDHuCeNqcH32VKiG5YZpexFSkDaYMo", highlighted: "not_found.html" },

    { dept: "ENG", id: "ENG522", name: "Applied Linguistics", handouts: "1wOb9qWNLeyMbzbQkwnswkmPLk-M_SV5p", highlighted: "https://drive.google.com/drive/folders/1Dv4yOkZP-pREzy7pk2Tgqd_jD34jwOO6" },

    { dept: "ENG", id: "ENG523", name: "Discourse Analysis", handouts: "1d3TSdYz0xhylqlVPfQk6XWMG4LrAH2jH", highlighted: "https://drive.google.com/drive/folders/1spkszvgIA_Vdd9RgqmbNi1rZLaEfcRW1" },

    { dept: "ENG", id: "ENG524", name: "Critical Discourse Analysis", handouts: "1LyGnVcL3Rc-MFTfqaa4KdNpvH8wpHG3W", highlighted: "https://drive.google.com/drive/folders/1UGDi8zPkc8RiHTgEqIn9K-noVPclKDMM" },

    { dept: "ENG", id: "ENG527", name: "Language and Gender", handouts: "14OMSN_CwM7VFNFtvyYg1HXogHfSAaofd", highlighted: "not_found.html" },

    { dept: "ENG", id: "ENG529", name: "Technology in Language Teaching", handouts: "1d-3XflNRY8_Ktzztq48RB6oVkhdeJa77", highlighted: "not_found.html" },

    // FIN Dept
    { dept: "FIN", id: "FIN611", name: "Advanced Financial Accounting", handouts: "1yw8WmMK5ii-P5zPEp0MjROX4WJkaf_bL", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "FIN", id: "FIN621", name: "Financial Statement Analysis", handouts: "1bKgsDTRRVIFDIV2Tnvt9DkOPYBjm_MFS", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "FIN", id: "FIN622", name: "Corporate Finance", handouts: "1c7-Kywr3zE9yy_gC3qEv28ltXgaajQPJ", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "FIN", id: "FIN623", name: "Taxation Management", handouts: "1p2H4O-fAkxVIpPOKSjVPUXS8jJYXzuf0", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "FIN", id: "FIN624", name: "Islamic Mode of Financing", handouts: "1qpV6M3uig0GuqhqOS6humlwdzbiV9VTF", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "FIN", id: "FIN625", name: "Credit Analysis & Risk Management", handouts: "1rqxSCaAiRjmRe6H-U6UrC-kP6LbMwVzs", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "FIN", id: "FIN630", name: "Investment Analysis & Portfolio Management", handouts: "1p1-ckFDj1yBRKTEsxhAmCIIuDlFzsjvk", highlighted: "not_found.html", ppt: "not_found.html" },

    // GSC Dept
    { dept: "GSC", id: "GSC101", name: "General Science", handouts: "1NB_0s-ANg0xjkBVBE9zCapB4ZrHGz02A", highlighted: "https://drive.google.com/drive/folders/12zt-C5nJmsNmUylDBIuYmMwXEkbIPH9S", ppt: "not_found.html" },
    { dept: "GSC", id: "GSC201", name: "Teaching of General Science", handouts: "17_zvsYMSQHBhdy57N3Lk00AqwUnk8FqY", highlighted: "not_found.html", ppt: "not_found.html" },

    // ISL Subject
    { dept: "ISL", id: "ISL201", name: "Islamic Studies (Old)", handouts: "1-MWcJII1lVsehtBUWqDJMon41IxKm6H1", highlighted: "https://drive.google.com/file/d/1Au9BQumr8vK8TGFwPkdaLmEyfYOC33dN/view", ppt: "not_found.html" },
    { dept: "ISL", id: "ISL202", name: "Islamic Studies (New)", handouts: "1LPrbJsMD7xlAlOU47Xw-J5J_Y-Yj5Njo", highlighted: "https://drive.google.com/drive/folders/1W_gzyGtUsuVzH6oyhYq-vQ-rxK6HxyX6", ppt: "not_found.html" },

    // IT dept
    { dept: "IT", id: "IT430", name: "E-Commerce", handouts: "https://drive.google.com/file/d/1vL7EN92n_ocBpBz1Ff6jkCdjoxLK_f44/view", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "IT", id: "IT601", name: "System and Network Administration", handouts: "https://drive.google.com/file/d/1x79ZMMXrElN3NqqBzzyPNEP3oF20taq4/view", highlighted: "not_found.html", ppt: "not_found.html" },

    // MCM Dept
    { dept: "MCM", id: "MCM101", name: "Introduction to Mass Communication", handouts: "1k_6NYkPJRUvq6f7iUCtTBIry5jzPJxuG", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM301", name: "Communication Skills", handouts: "1BWXpCAFsLIv_W6rNK1yLa5AxCxS2aQ4K", highlighted: "https://drive.google.com/drive/folders/1XJFu5qckJZvIPK6uLnG8S--sbSEBt1xq", },
    { dept: "MCM", id: "MCM304", name: "Mass Media in Pakistan", handouts: "1YHk_AgjBV5hlXGfUm4tW5drtRiVrgv96", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM310", name: "Journalistic Writing", handouts: "1BeqQTzJgkJeb_oBw2CM54bey0IJMhKJL", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM311", name: "Reporting and Sub-Editing", handouts: "1m1FYzKzbOAZLP-hugVl6p35LecnvWeO7", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM401", name: "Fundamentals of Public Relations", handouts: "1RS2hpWnR8VIY5D-GuXN5hDnUsaytWAnq", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM404", name: "Globalization of Media", handouts: "1mZpvdz8cwqdOt-F4jYVnavFQ6ZnNTOmr", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM411", name: "Introduction to Broadcasting", handouts: "1EnX4uPVNUnY_pttNv9-ZdjU7eBFlNVVr", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM431", name: "Development Communication", handouts: "1JA8LYP6-z92SeaKNZWossf3uOQzi4ejM", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM501", name: "Advertising", handouts: "1WSbiapvs7SaQpRRew8eSOdAdKT3IWDdU", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM511", name: "Theories of Communication", handouts: "1da2SgiZo7dUujz5tzLzVEXCRS7MoJNZz", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM514", name: "Feature & Column Writing", handouts: "1xyxLSESx_-yAVFbBwNnH-mHCw606X5-D", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM515", name: "Radio News, Reporting and Production", handouts: "1AtqJoo22m9lxIjfkNSz97sBJHLXHvhq8", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM516", name: "TV News Reporting and Production", handouts: "17nSfBMNjFrpYVzAnTyBCBRJcR12zBe6K", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM517", name: "Online Journalism", handouts: "12j0xzApO6OVwnPXRATD_VpvKjZYNpgRU", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM520", name: "Contemporary Mass Media", handouts: "1wRnXUzQN-hHddrVTssGG-yrwWUdUIAy1", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM531", name: "Community Journalism", handouts: "1CYW68mq116YyWJ_xUTPA01dJWdf6p1Ho", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM601", name: "Media Management", handouts: "15E7hwpSmqxFEd55zqgRN-J91SP_Kf5jq", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM604", name: "International Communication", handouts: "1tGdxE_n9D7AuHlZWqhFzTKMnFICYHQv5", highlighted: "not_found.html", },
    { dept: "MCM", id: "MCM610", name: "Media Laws and Ethics", handouts: "18VgeX9Lg2CEGOoYos4Oa2sd4CEpY0IFH", highlighted: "not_found.html", },

    // MGMT Dept
    { dept: "MGMT", id: "MGMT611", name: "Human Relations", handouts: "1ntz6WVwt31dAShiHFXjuOULf_0nJze35", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT614", name: "Supply Chain Management", handouts: "1JNc7YhLZGdODlRj9iOKp7iQLbeV5cz-G", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT615", name: "Transportation & Logistics Management", handouts: "1JPeqQ5RzXxZaFNe67yvhJhqFCapKV4wD", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT622", name: "Management Skills", handouts: "1phCNywx_xoubmto2Fk97ntoW5EuXoy3g", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT623", name: "Leadership & Team Management", handouts: "18b7q1Av7jsPYEtyNreTF5w_ziex3XBWY", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT624", name: "Conflict Management", handouts: "1aIhAI1iVIcGamexG35iKyExhovB9vUKi", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT625", name: "Change Management", handouts: "1IeK2h4z3UGvJw6lBOzt0UzEYBQGU1n02", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT627", name: "Project Management", handouts: "1Ry8zdwMislUvhK__OnWmM22IgEOblmXw", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT628", name: "Organizational Development", handouts: "1r5b3bOs4BrycOnfgRlPBTnT6ZHmS_CRl", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT629", name: "Crisis Management", handouts: "1nLXbLzcHajREcAwKqywkRsqaxnq-z48V", highlighted: "not_found.html", },
    { dept: "MGMT", id: "MGMT630", name: "Knowledge Management", handouts: "15drEvGbAXzvh_s9EaYeA_lnds8ODBNy1", highlighted: "not_found.html", },

    // MGT Dept
    { dept: "MGT", id: "MGT101", name: "Basics of Financial Accounting", handouts: "1kq_Lyk_Ciyk2BiFbhR7GCawAHfa-d5KN", highlighted: "https://drive.google.com/file/d/18EsOgUnAD74kaQoLTeGH85xfvsPnBPYH/view", ppt: "not_found.html" },

    { dept: "MGT", id: "MGT111", name: "Introduction to Public Administration", handouts: "1RLdfDaBIjc-qPrAk8p5tl3heYT1gTDl0", highlighted: "https://drive.google.com/file/d/1ixOh_Oo2O2cpQpeawpgAgVqrHZ1DMdRd/view", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT201", name: "Financial Management", handouts: "1D3MfaAj9llGzVfETITzr7zmW2w72kxQr", highlighted: "https://drive.google.com/drive/folders/1yplK2QVl0QtIHABHwvG9y3bybkYodSNM", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT211", name: "Introduction to Business", handouts: "1EBRMSC34bVcrgeFE8QXeTHLvBd6v6-j_", highlighted: "https://drive.google.com/uc?export=download&id=1gdj02Ui7EMrOaU8YVuMeNUFaWezqyGyc", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT301", name: "Technical Articles", handouts: "1xe78opbBfoVvhuZlMOcto9LtbXTbcKn8", highlighted: "https://drive.google.com/drive/folders/1gbwNuBvBGe_yD4mQEgBguGpCqzlnPWBI", ppt: "https://drive.google.com/file/d/1EqUK4Z3f7z6Z-u_EQQj9C4xAkS1vpgPZ/view" },
    { dept: "MGT", id: "MGT401", name: "Financial Accounting II", handouts: "1Jb2GEsz31W3Hwui4AvwZcDSSG044Y-kr", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT404", name: "Managerial Accounting", handouts: "1S7-16sqAfJIH95xvrO00z_-tS8Ay7bSt", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT411", name: "Money & Banking", handouts: "1rW9IJ66Sn8mrKXZhYcNynxn3qSXJ8H4s", highlighted: "not_found.html", ppt: "https://drive.google.com/drive/folders/1RM88UhP158R7dfhubU63MGD9VzK5ucav" },
    { dept: "MGT", id: "MGT501", name: "Human Resource Management", handouts: "1k5GRolNgZSw2JeQtDggVVE9eabLliq4w", highlighted: "https://drive.google.com/drive/folders/1K03OlFByht_jbPzdL8_N8LhAbq8GCwQU", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT502", name: "Organizational Behavior", handouts: "1pcr4NggkvGrWyg49fYmKM9meRaxTqdbM", highlighted: "https://drive.google.com/file/d/1sarTe4Yy4Fw_ji97bYSWvVJaqCdFd7Kt/view", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT503", name: "Principles of Management", handouts: "1icK0lWc9rX9nj5QfWGZlyBz-U2t_UAEj", highlighted: "https://drive.google.com/drive/folders/1BDth85EVoVyoZWpcoKrSwQ_zbV76Mas0", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT504", name: "Organization Theory and Design", handouts: "1kiXj7OlsUJ2pFgUK9RXqwVx9qlc0bA2w", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT510", name: "Total Quality Management", handouts: "1VuTlN23XLI8ryDBFDkVxEPe5TWXg7gXz", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT520", name: "International Business", handouts: "10Bu7btnO8gv8oucaJLkQGoDwh2qXshEW", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT601", name: "SME Management", handouts: "1Zsm6KLOGU1gzbL4zc2kgC9-KUkt6P0Lp", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT602", name: "Entrepreneurship", handouts: "1IN51Nonj8t-mSTjATZwt2KM6hBb0X4Bc", highlighted: "https://drive.google.com/file/d/1IN51Nonj8t-mSTjATZwt2KM6hBb0X4Bc/view", ppt: "https://drive.google.com/file/d/1tQ88sy-_EWL-8mxYoTilAEAkxTFJZJVp/view" },
    { dept: "MGT", id: "MGT603", name: "Strategic Management", handouts: "1p1wKq67LjdRRUlwR3Q38W5cZleD5mLSG", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT611", name: "Business and Labour Laws", handouts: "1a2b1agsnAa5WI2JqmXEMv6X1FcWjc9MM", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT612", name: "Corporate Law", handouts: "1-W9tVnz58wOMyQY3-Fhg8HOg9_Ud27ij", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT613", name: "Production and Operations Management", handouts: "12iiE0_SOA0sfw_ciFgFSInNCtj_0no1_", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT621", name: "Administrative Law", handouts: "18sucCSivbGgYTc56SLdCC6SHmBIwAuIz", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT705", name: "Advanced Cost Accounting", handouts: "13qRat5FH6Wx_6NltIctH8ti7kE1bX1tq", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MGT", id: "MGT713", name: "Production Management", handouts: "1Xk-TceTINiJa_h-4EqUxlmVuHWW6cl5q", highlighted: "not_found.html", ppt: "not_found.html" },

    // MKT Dept
    { dept: "MKT", id: "MKT501", name: "Marketing Management", handouts: "1D9xwm_-op5Tjv6gXhLiUmWLKfnEJBgtC", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MKT", id: "MKT530", name: "Consumer Behavior", handouts: "1CZUhe2rn8E7K_12DdsLmzKCMrDwThZve", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MKT", id: "MKT610", name: "Customer Relationship Management", handouts: "1DB8lKIYLTXwKveT8bvgMEsEqSqOLooky", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MKT", id: "MKT611", name: "Marketing Research", handouts: "1D5p_QijUvGXjJu9izeVoRRcT8CKKwlHz", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MKT", id: "MKT621", name: "Advertising and Promotion", handouts: "1AYDbtBD8JbjIqV1aZJPeWNoo3e4yG5NQ", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MKT", id: "MKT624", name: "Brand Management", handouts: "1mA5bh-U6uJFkaAhTBY83v2jp3tci4_cO", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "MKT", id: "MKT625", name: "Services Marketing", handouts: "1rAxYFgR-md6nmMewkgrv5cBzfgjJ2aWm", highlighted: "not_found.html", ppt: "not_found.html" },

    // MTH Dept
    { dept: "MTH", id: "MTH001", name: "Elementary Mathematics", handouts: "1V7Ndod8Wp4lj4Ft_MPhDW3gr3Ii-pyVj", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH100", name: "General Mathematics", handouts: "1Plmwckeb4Dr_FuyqHasHjcEnkifdpQ53", highlighted: "https://drive.google.com/file/d/1ZlR55xiZmXk2Hrsq5VqDq5tNtipJ5y1A/view", ppt: "https://drive.google.com/file/d/1GcogJ_47cV_3Wqqof2rlSueTcCDaBAKP/view" },

    { dept: "MTH", id: "MTH101", name: "Calculus And Analytical Geometry", handouts: "1SfvSaeGyUbKuQtQ9uPJovO10PRGYyDIe", highlighted: "https://drive.google.com/drive/folders/10h9TxVsM8xG1KkKMAMD3FPAuLvNm3Qb6", ppt: "https://drive.google.com/drive/folders/1OKqSqpqGQOGPE2e0LONYWGDY616L1uO_" },

    { dept: "MTH", id: "MTH102", name: "Basic Algebra and Trigonometry", handouts: "1MZfBZWVGH1hZndck6F67PptybTZW3AKG", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH104", name: "Sets and Logic", handouts: "https://drive.google.com/drive/folders/1dHOnAXGZAZIqXXtn60m-WlAR3AaqmsoC", highlighted: "https://drive.google.com/drive/folders/1dHOnAXGZAZIqXXtn60m-WlAR3AaqmsoC", ppt: "https://drive.google.com/file/d/1WMyJWPtjIQM90AMLR3JeXci80DaOqs-V/view" },

    { dept: "MTH", id: "MTH201", name: "Multivariable Calculus", handouts: "13zFZHK_dR6ymNDcvmWc2gbgqCbi9HMCe", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH202", name: "Discrete Mathematics", handouts: "12sJJ11vxNbyfLWLbs_8BZUzyGv0YVl6E", highlighted: "https://drive.google.com/drive/folders/1scCQyY5IkPVN_4razWD1I1oLRBeHSBiO", ppt: "https://drive.google.com/file/d/1IbxZF0OnLc2p9vWFXBY1dNZPj99I6t2K/view" },

    { dept: "MTH", id: "MTH301", name: "Calculus II", handouts: "1tnt94eHuMaRiPgnoNXMC3MCp_zy5FCmE", highlighted: "not_found.html", ppt: "https://drive.google.com/drive/folders/1k_MYNQ9jOtCFWw-HUip0Fhp67CYmMGvH" },

    { dept: "MTH", id: "MTH302", name: "Business Mathematics & Statistics", handouts: "1iCpy2HEzYRbhuaXC1jErlAIsSnqWfIbP", highlighted: "https://drive.google.com/file/d/1g91yXOFbIurs97QEqA_pAK9EVTm6RVpv/view", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH303", name: "Mathematical Methods", handouts: "1oT6JPs8vnN7X3w6jUDHxKno0YoIiJmG-", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH304", name: "Statics", handouts: "1bIyLMvQGovluDnwQe8A1hEUXt-2IwkrR", highlighted: "not_found.html", ppt: "https://drive.google.com/drive/folders/1MczjsaAufs447bM-QBq2YlTmB8-K2NM-" },

    { dept: "MTH", id: "MTH401", name: "Differential Equations", handouts: "1N_ZSuz31Zs3Mgz0q0dUQplymdkF5hnBI", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH403", name: "Calculus & Analytical Geometry-II", handouts: "1M9zqxgQd2D6hi4YGyev2jOJ6DmKtONOj", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH404", name: "Dynamics", handouts: "https://drive.google.com/drive/folders/1FVbuwZYSqisJ6CqwZLaPYDjp5K2p2Wtf", highlighted: "not_found.html", ppt: "https://drive.google.com/file/d/1BBhcQCgBx8kcZD3elUFLNM103qEsOtXw/view" },

    { dept: "MTH", id: "MTH405", name: "Elementary Topics in Pure Mathematics", handouts: "1gEzR7z0Jnq8fKPC2Ug0VWxyoZvQ1eNKj", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH501", name: "Linear Algebra", handouts: "1CR7ijfBlljUhl2HazgKjMRK8E5DWOilp", highlighted: "https://drive.google.com/file/d/1K__zvA1zZNUWb9OFAe5AA1yKV52RYq6w/view", ppt: "https://drive.google.com/drive/folders/1aPoRXPK4kk3DvgT7jnPQKZ6zKFSZ4pvZ" },

    { dept: "MTH", id: "MTH601", name: "Operations Research", handouts: "1BF-3QeiF1oIho77QV5PsHjxztDjIuyUJ", highlighted: "https://drive.google.com/drive/folders/1wt4qCZGrPox6hB3hF8YZg4aU5sxU6iiE", ppt: "https://drive.google.com/drive/folders/1tzNrMhTKXoy7u1s_-CHNAwO2kstXN9Yd" },

    { dept: "MTH", id: "MTH603", name: "Numerical Analysis", handouts: "1P1W9kk8Ib1Z2gqfMlRKDr7Vk1hotmtnf", highlighted: "https://drive.google.com/drive/folders/1_3QNKvAn1J6LUEo04xQGv67MFE_vDiMA", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH621", name: "Real Analysis I", handouts: "1q8syQhAsfuSfiph4zhHYsnmyVIVhTNT6", highlighted: "not_found.html", ppt: "https://drive.google.com/file/d/1NYOnbovJST2Ry6iba751j9N42eU1bBp7/view" },

    { dept: "MTH", id: "MTH622", name: "Vectors and Classical Mechanics", handouts: "1NYn3BleFvdmeADuP7QbeiSNeMJr8Qg27", highlighted: "https://drive.google.com/file/d/1hPHrO_Kf-yP6QZxa6X-dO4AITvbAA3Cz/view", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH631", name: "Real Analysis II", handouts: "1bp9bqWyWaOv3thJe6H01WwSBYzDsEZwZ", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH632", name: "Complex Analysis and Differential Geometry", handouts: "1W9V5-HELV5IhVSYNA1gfI_pFdveh5cpf", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH633", name: "Group Theory", handouts: "1S9489BygKnC2bX3kG42EfJiHKW5xY5kq", highlighted: "https://drive.google.com/file/d/1BTCgeiH019jhMOtrkLIS8jXk5AiI5qYp/view", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH634", name: "Topology", handouts: "1X-71Ej6fL1w6obF-2d3v-kVNr1WFueft", highlighted: "https://drive.google.com/file/d/1Fz7PX0MM0udo9mBbdL67flP6x7OQxDaq/view", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH641", name: "Functional Analysis", handouts: "1mip-W4gA4DfpYib1wgYLgVKh0vjFdhZL", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH642", name: "Fluid Mechanics", handouts: "1bNUXyPtIclUnhmpYGQYkPQVzfRdJE_u6", highlighted: "not_found.html", ppt: "https://drive.google.com/drive/folders/1auCYiI8LzL_FxvrpAT9H9R1zc4cKoc8m" },

    { dept: "MTH", id: "MTH643", name: "Advanced Differential Equations", handouts: "1y4IGTxIYA_36gC2TNcwW7-8j1wf5NQHg", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "MTH", id: "MTH644", name: "Advanced Linear Algebra", handouts: "https://drive.google.com/drive/folders/1o_gi0eEVlXx9IX-Oh2iAq1nlQVFGSFoH", highlighted: "https://drive.google.com/drive/folders/1o_gi0eEVlXx9IX-Oh2iAq1nlQVFGSFoH", ppt: "https://drive.google.com/drive/folders/1o_gi0eEVlXx9IX-Oh2iAq1nlQVFGSFoH" },

    { dept: "MTH", id: "MTH645", name: "Advanced Measure Theory", handouts: "https://drive.google.com/file/d/1SqJTTptjtSAkgHcL46Fp9SNf8ZQqXjDj/view", highlighted: "https://drive.google.com/file/d/1E-JWxJldmW9z2wyN7JJkMOmHKDj30ioK/view", ppt: "not_found.html" },

    // PAK Dept
    {
        dept: "PAK", id: "PAK301",
        name: "Pakistan Studies",
        handouts: "1k3S9CdP6qzU0VSHL0GSeclSClBHLE5ev",
        highlighted: "https://drive.google.com/uc?export=download&id=1dsDu0e1eZ9qBpHwKSFnbdkXKTelmORvr",
        ppt: "not_found.html"
    },
    {
        dept: "PAK", id: "PAK302",
        name: "Pakistan Studies (New Curriculum)",
        handouts: "1a_DH03lWzYVrwuLRX4RrR8rS440Y7cZL",
        highlighted: "https://drive.google.com/uc?export=download&id=1GngtRDNMZD-BoTdDuyQFhL5_KcYZZY8o",
        ppt: "https://drive.google.com/uc?export=download&id=1M825wE5s4G1fkjvRSXRgps1DURbRuzvz"
    },
    {
        dept: "PAK", id: "PAK522",
        name: "Constitution of Pakistan",
        handouts: "https://drive.google.com/file/d/1g54JjYwahrLx7y7veK64I1k4G6yvIOz0",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/uc?export=download&id=1M825wE5s4G1fkjvRSXRgps1DURbRuzvz"
    },

    // PHY Dept
    { dept: "PHY", id: "PHY101", name: "Physics", handouts: "13ySMA-hyCDwbqN9IsBpJBBgXx_FIVUsj", highlighted: "https://drive.google.com/drive/folders/14nRtY5xqD66Zpp1Wm2Ig_V-36PMkcyuK", ppt: "not_found.html" },
    { dept: "PHY", id: "PHY301", name: "Circuit Theory", handouts: "1-g_VROSWnCY1Bvm7wORWli0w5QlTpaBH", highlighted: "not_found.html", ppt: "not_found.html" },

    // PSC Dept
    {
        dept: "PSC", id: "PSC201",
        name: "International Relations",
        handouts: "1Oq25bGbk14gvYABupLJhJlG6scArNhav",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "PSC", id: "PSC401",
        name: "Public International Law",
        handouts: "17Hg0fFhLx7XY39fFaIW5Uj9NN1tLWa5A",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    // PSY Dept
    { dept: "PSY", id: "PSY101", name: "Introduction to Psychology", handouts: "1KftueKRiUmot03y5gjhBggv5OeBMiS4p", highlighted: "https://drive.google.com/uc?export=download&id=13-T9w7StO2NhrqzngcOhvtN1G8wApHM8", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY401", name: "Clinical Psychology", handouts: "1x7aywbLIyL1irh_EChT5wCM0EXS5_iq_", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY402", name: "Experimental Psychology", handouts: "1ZZae2-4aqD1wOfbMf7n-CdIhUxYElr0x", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY403", name: "Social Psychology", handouts: "1o0YbM2KEOqqQyKWuS0d781QPZWF_zR0f", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY404", name: "Abnormal Psychology", handouts: "1ExJ9fOU5IkEK2G-0uTm54yy9XiVrpiKh", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY405", name: "Personality Psychology", handouts: "1-DFbYieg0juy5CE3Sg9ipykWDgRzpZkm", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY406", name: "Educational Psychology", handouts: "1sfziOmUXQDU_ioJbif5qG9wZvMvp8fqF", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY407", name: "Sport Psychology", handouts: "1JhS0gSyciIV0oBl5u-RJHxazYF8zzOoT", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY408", name: "Health Psychology", handouts: "18zu-zwUiQ5FRxw0HxB8EMtcyEGKPxgdf", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY409", name: "Positive Psychology", handouts: "1WzumRqicUY9_Mj4wtl2BlWDizhdhAowd", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY502", name: "History & Systems of Psychology", handouts: "1Vf4QpXlZ8SqWzDlKNuJVjNJGlnvCydDM", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY504", name: "Cognitive Psychology", handouts: "1VgpJIJ7bjGDQ_A4wOIgDbtn8r2oiDeFN", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY505", name: "Developmental Psychology", handouts: "1LA6gt9fcgVcWOBzEzv3ErUd_NrLuQPgR", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY510", name: "Organizational Psychology", handouts: "15SrgZUoCIcZyg515iw5npBtrwGmeOkN_", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY511", name: "Environmental Psychology", handouts: "1-Aj67SgQcT-TKYwOJFQJ0mGObhWKNUlh", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY512", name: "Gender Issues in Psychology", handouts: "128-NCeCFstbVY4ryGLWRWnmFacwZ0Ow4", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY513", name: "Forensic Psychology", handouts: "1H4lPxNVUBFs3sBKSbij_urUbC56Yk9IW", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY514", name: "Consumer Psychology", handouts: "1m8aq9hEpEGL5LIhlFCuetbgGyBhYOAmg", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY515", name: "Cross-Cultural Psychology", handouts: "1x0fm1g2bhqXyNPDWZA_-gg710O7WJRqm", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY610", name: "Neurological Bases of Behavior", handouts: "1NfpltYvkkyH8cnOtPkTHaa0EcICdZiP7", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY631", name: "Psychological Testing & Measurement", handouts: "1iJ3KvbdSUCjSC5r0gdp2He-jckY7ZUwP", highlighted: "not_found.html", ppt: "not_found.html" },
    { dept: "PSY", id: "PSY632", name: "Theory and Practice of Counseling", handouts: "1BK-MjEkVl2piDZVGzB0OHoXGm35OQ9vq", highlighted: "not_found.html", ppt: "not_found.html" },

    // SOC Dept
    { dept: "SOC", id: "SOC101", name: "Introduction to Sociology", handouts: "1GeoSLww1FLv5yt6gtNt2du7mY0n8aDue", highlighted: "https://drive.google.com/drive/folders/1JtrxBw-TC9GdMKd4qiVHdeDLFbs_x7x6", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC201", name: "Social Statistics", handouts: "1yuEqRzpyQYu47fHxf7oBnaeSXi0c1wY9", highlighted: "1yuEqRzpyQYu47fHxf7oBnaeSXi0c1wY9", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC301", name: "Introduction to Social Work", handouts: "1c5UJjfXN7nYMZoNeTqW6Peka2B2jAIba", highlighted: "10UeY_P2BybABaVAcYKNf_BN_HaAjttBN", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC302", name: "Sociological Theories", handouts: "1ziX-rIVMzF5cNlibVXKnXfvi5SLiHZed", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC401", name: "Introduction to Cultural Anthropology", handouts: "https://drive.google.com/drive/folders/12NeXAHeT3LYYhMz5JZq_OvSzbvNYbLO0", highlighted: "https://drive.google.com/drive/folders/12NeXAHeT3LYYhMz5JZq_OvSzbvNYbLO0", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC402", name: "Sociological Perspectives", handouts: "1X_wPBd7qNAL1kcRq_3UJioR0WnasekFZ", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC403", name: "Gender Studies", handouts: "1PTSvuKRpJLQ2AbXs8gV_-m49iNCAllYR", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC509", name: "Quantitative Research Methodology", handouts: "1N7Q8HkMdhOG7_JipMpg1Nu_titFoYe0J", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC601", name: "Social Policy and Governance", handouts: "1IcsYHmjtOF_-aZuQoi-UrrM2_Y7fZihI", highlighted: "1IcsYHmjtOF_-aZuQoi-UrrM2_Y7fZihI", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC602", name: "Sociology of Education", handouts: "10QZQBGu29izJhmF4E7wEWMloj-8kbbO7", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC603", name: "Sociology of Development", handouts: "13MmN5TbLPBlBDIE_h0vB7bBt044tAI2P", highlighted: "not_found.html", ppt: "not_found.html" },

    { dept: "SOC", id: "SOC605", name: "Population Dynamics", handouts: "1OR7IDJB84lGJ-MwObtcb7v0UXB8-e9_1", highlighted: "not_found.html", ppt: "not_found.html" },

    // STA Dept
    {
        dept: "STA", id: "STA100", name: "General Mathematics and Biostatistics",
        handouts: "1oKPyrwOz5YxtRb_7uocBVGzLRCWQ3mEL",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    {
        dept: "STA", id: "STA301", name: "Statistics and Probability",
        handouts: "1W5ja10yhaacRBCnAdiB-amrpwuvcsxwO",
        highlighted: "https://drive.google.com/drive/folders/173igWwemlNOchHcPOAdN12ooM2xmVxww",
        ppt: "not_found.html"
    },

    {
        dept: "STA", id: "STA404", name: "Regression and Correlation Analysis",
        handouts: "1y1KWR2Y8MTJIF-0iLwlkigUWx7uzSsMf",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    {
        dept: "STA", id: "STA406", name: "Statistical Inference",
        handouts: "1EAZQeu7OynkDVhXtpvSFCC-yUQftrwKH",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    {
        dept: "STA", id: "STA630", name: "Research Methods",
        handouts: "1krEoI98Tp8sWH0fhugzDzU5lr1xduAmM",
        highlighted: "https://drive.google.com/file/d/1-sue_OMgDaX7UoIK8PdENSy7ROMu-S8p/view",
        ppt: "https://drive.google.com/file/d/1-sue_OMgDaX7UoIK8PdENSy7ROMu-S8p/view"
    },

    {
        dept: "STA", id: "STA631", name: "Research Methods (STA631)",
        handouts: "https://drive.google.com/file/d/1a1t9GhvXZz1_8MXiFJjKvyCFNV0S-g7Y/view",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    {
        dept: "STA", id: "STA632", name: "Sampling Techniques",
        handouts: "1G8fzY4I3qcLMdEteKN9GjK5xyb8CI0J2",
        highlighted: "not_found.html", ppt: "not_found.html"
    },

    {
        dept: "STA", id: "STA641", name: "Statistical Packages Applications",
        handouts: "1W8wEN4fdeDufjvsrcpI6ogx66FI0l6sv",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/uc?export=download&id=1W8wEN4fdeDufjvsrcpI6ogx66FI0l6sv"
    },

    {
        dept: "STA", id: "STA642", name: "Probability & Statistics",
        handouts: "1r3oji7wD59hUMJsuhkO5LZCJE9K_MBQP",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/uc?export=download&id=1r3oji7wD59hUMJsuhkO5LZCJE9K_MBQP"
    },

    // ZOO Dept
    {
        dept: "ZOO", id: "ZOO101 | ZOO515T", name: "Biological Techniques",
        handouts: "1bRCXoXIZBOxO_QsrG_bpsK6es38S3yqz",
        highlighted: "https://drive.google.com/file/d/1bRCXoXIZBOxO_QsrG_bpsK6es38S3yqz",
        ppt: "not_found.html"
    },
    {
        dept: "ZOO", id: "ZOO102 | ZOO514T", name: "Principles of Animal Life-I",
        handouts: "1QN6o2CwGDX20FvH9JL1Iu6-6192lygM3",
        highlighted: "https://drive.google.com/file/d/1AspvGrsEdoup_bacOOPA1lg6d1NcLAH-",
        ppt: "not_found.html"
    },
    {
        dept: "ZOO", id: "ZOO103 | ZOO511T", name: "Principles of Systematics",
        handouts: "1_KVjLE2x7OpkgZ0xS5emN5JU4A2WeOTn",
        highlighted: "https://drive.google.com/file/d/1OZeanWDph-d1JId5LbLcN8BCvdedcNuA",
        ppt: "https://drive.google.com/file/d/1_KVjLE2x7OpkgZ0xS5emN5JU4A2WeOTn"
    },
    {
        dept: "ZOO", id: "ZOO201 | ZOO512T", name: "Animal Diversity: Invertebrates",
        handouts: "11BmjNScRwXE8yjJObeh2GRFZ20ammrSQ",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "ZOO", id: "ZOO202 | ZOO513T", name: "Animal Diversity: Chordates",
        handouts: "https://drive.google.com/file/d/1HD8f4II4gB3rFoEi1Hw9YmOT-TrujL58",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1v9ITdiEu5bulgyzGorlf8pixn30N3np3"
    },
    {
        dept: "ZOO", id: "ZOO203", name: "Principles of Animal Life – II",
        handouts: "",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1Wfn1Yx6JmabN0v4iQgIZ1OhgkrEc_uR6"
    },
    {
        dept: "ZOO", id: "ZOO301 | ZOO516T", name: "Animal Form & Function-I",
        handouts: "1HyOzggNqWKirnS1FTVOq1sKtMXM7lOyq",
        highlighted: "https://drive.google.com/file/d/1HyOzggNqWKirnS1FTVOq1sKtMXM7lOyq",
        ppt: "https://drive.google.com/file/d/15w-Qm1pfpPisiniBeYQUEwhz9KO7USgq"
    },
    {
        dept: "ZOO", id: "ZOO302 | ZOO517T", name: "Animal Form & Function-II",
        handouts: "https://drive.google.com/file/d/1QMT1s0dGFnXq5kfEotO-v5d9JcwQLLFZ",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1VDF5GHh7eSu75PVkVOop3GzOW0qBOYlU"
    },
    {
        dept: "ZOO", id: "ZOO307", name: "Environmental Biology",
        handouts: "1_zYBSFBdBaZu_iatoXzRubGvZobmhEFT",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "ZOO", id: "ZOO401", name: "Limnology",
        handouts: "",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "ZOO", id: "ZOO403", name: "Animal Behavior (Ethology)",
        handouts: "1Fp8_ksHfmcNJqi15QIiXFCyaZjlIkXGh",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/18STrUb27kNBzU9NsCApSOj3I_TqojSSO"
    },
    {
        dept: "ZOO", id: "ZOO404 | ZOO519", name: "Physiology",
        handouts: "17lr7y_AGZocK_0kmSC8PWAl_VJJ_bVsD",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1AWk_1pocO0zb4jdoz6y61twIw8E11434"
    },
    {
        dept: "ZOO", id: "ZOO501", name: "Developmental Biology",
        handouts: "12CG-lrQVY7w8gMSr1ZTAVkxoy0L0NeTp",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1YjYiOdQIjQG4dwr2H02Tuw1fUKEH-zQa"
    },
    {
        dept: "ZOO", id: "ZOO502", name: "Animal Physiology and Behavior",
        handouts: "1cowdk-vKLbnZR4QG0sf463Cur_MkC-Cj",
        highlighted: "https://drive.google.com/file/d/1KEVH0wYR1dOovtStOOxWtfM2gw3k8y4h",
        ppt: ""
    },
    {
        dept: "ZOO", id: "ZOO503", name: "Zoogeography and Paleontology",
        handouts: "1dGDIxbnCbbCwm-wao6gpeOaQGIxW1ZGj",
        highlighted: "https://drive.google.com/file/d/1dGDIxbnCbbCwm-wao6gpeOaQGIxW1ZGj",
        ppt: "https://drive.google.com/file/d/1fnp23kL_tTo5hc4Nm1MmkN5yWSYKY-zB"
    },
    {
        dept: "ZOO", id: "ZOO504", name: "Wildlife",
        handouts: "1Utz3Ere988EezS-7-x5s5Vl9I9c2Cshr",
        highlighted: "https://drive.google.com/file/d/1OvLEOspQDzivkepFrSyEeYdd2rYKNuYe",
        ppt: "https://drive.google.com/file/d/10zjQ8lDaLyJrWnqRSbM2Sg26gtbBrfNi"
    },
    {
        dept: "ZOO", id: "ZOO505", name: "Cell and Molecular Biology",
        handouts: "1Ozv479NHyHYAO1CtqIRwDzkFXtQ8W7Ce",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1Pa5gPzvKYVXQ3opZiU4wXpY7yC9Eq69Z"
    },
     {
        dept: "ZOO", id: "ZOO506 | ZOO518", name: "Applied Entomology and Pest Management",
        handouts: "1bjjczQDekO8fBT9M_pA2JxRPLLoRZk47",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },
    {
        dept: "ZOO", id: "ZOO507", name: "Principles of Animal Ecology",
        handouts: "154UjSJZhL0T7nPOIp-_H-ufos9MdvQme",
        highlighted: "https://drive.google.com/file/d/154UjSJZhL0T7nPOIp-_H-ufos9MdvQme",
        ppt: ""
    },
    {
        dept: "ZOO", id: "ZOO510", name: "Economic Zoology",
        handouts: "1qB1KkqtGonstxQoWkBRu6hOY9Y2dB1ma",
        highlighted: "https://drive.google.com/file/d/1wRkj0WoqglzZuKt8XXE_4ewc8wAazMXQ",
        ppt: "https://drive.google.com/file/d/1eXtgLSwQWL1ePEMSrt399u00TmCxzuWN"
    },
    {
        dept: "ZOO", id: "ZOO603T", name: "Fish Biology",
        handouts: "",
        highlighted: "not_found.html",
        ppt: "not_found.html"
    },

    // BT
    {
        dept: "BT", id: "BT101", name: "Ecology, Biodiversity & Evolution-I",
        handouts: "1RblWfA3NvdB666s6JEh4mRI8z7Dhfo3s",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1bF6xqje9WhIc9M5egK8pe2syIkG7_Tvw"
    },
    {
        dept: "BT", id: "BT302", name: "Immunology",
        handouts: "1VrgT6yMP9Jy5Ysd4BWSIBUrucxDPdhwp",
        highlighted: "https://drive.google.com/file/d/1J4F0CE3mv8d8DEcgQXP1b9oWT_56dSs8",
        ppt: "https://drive.google.com/file/d/1VrgT6yMP9Jy5Ysd4BWSIBUrucxDPdhwp"
    },
    {
        dept: "BT", id: "BT601", name: "Virology",
        handouts: "1bvrT4aSYKuZM3Y9CYq9wEXJa4svZO_vF",
        highlighted: "https://drive.google.com/file/d/1ShCoiav5pcKqtYId93tXCt_ig7GO0Ndf",
        ppt: "https://drive.google.com/file/d/1ZDGv2ku34ogMG2fRlYp2T-sgfVVAn7bS"
    },
    {
        dept: "BT", id: "BT605", name: "Biosafety & Bioethics",
        handouts: "1KIvLsClMwywjPJqtFYT6EgrynwNojm9y",
        highlighted: "not_found.html",
        ppt: "https://drive.google.com/file/d/1KIvLsClMwywjPJqtFYT6EgrynwNojm9y"
    },

];
