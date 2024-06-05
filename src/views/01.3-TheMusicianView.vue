<script setup>
import { useHead } from "@unhead/vue"
import cardwindow from "@/components/cardwindow.vue"
import cardprocess from "@/components/cardprocess.vue"
import stepProcess from "@/components/stepProcess.vue"

useHead({
    title: "About",
})
</script>

<template>
    <main>
        <h1>About</h1>
        <div class="aboutcontent">
            <cardwindow>
                <template v-slot:subtitle>My story</template>
                <template v-slot:titlecontent>Why don't you get a seat? This tale is a bit long, so please, get
                    comfortable.</template>
                <template v-slot:content>
                    <p>
                        I have been struggling in the past (and present) to find an artist name that could define my
                        musical
                        universe and reinvent its own sense all over my musical career. My name has evolved from Sara to
                        Sarah, Sara Hurrikane, Sara H, Sara Hache to finally get to Sarache. I didn’t notice this was a
                        real
                        last name until some people started contacting me thinking that we’re from the same family, but
                        now
                        it’s too late to change my artistic name to not be a last name (or it isn’t?).
                    </p>
                    <p>
                        Anyway, Sarache, formerly known as Sarah, took <strong>piano classes</strong> and learned the
                        classics the old
                        boring way. Thanks to my dad, I started playing “La Bamba” on the <strong>guitar</strong>, and I
                        understood how
                        to make my own music and how to <strong>play chords</strong> (at that age, minor and major
                        natural chords).
                    </p>
                    <p>
                        Of course, the songs you make with 15 years old are quirky and simple, but I remember performing
                        “No
                        Soy Capaz” to my friends, family and roomies from my fifteens to my twenty-somethings with my
                        acoustic guitar (or someone else’s).
                    </p>
                    <p>
                        As well, I had some <strong>music references</strong> as I was learning how to create music, and
                        these were
                        <strong>Lana del Rey and Amy Winehouse</strong>, among others of course, but I was blown away
                        with their
                        perfected and coherent artist imagery and persona.
                    </p>
                    <p>

                        Lana del Rey was transportative. Along her deep voice and soft face and features, we were
                        experiencing a majestic palace full of Tumblr references and broken lovers.
                    </p>
                    <p>

                        Amy Winehouse, on her side, was a reflection of her unapologetic, fool-spoken poetic
                        conventional
                        songs, merging the two perfect opposites to make this flawless birth of a.
                    </p>
                    <p>

                        I started noticing how the <strong>industry</strong> tended to work, and how they will
                        absolutely prioritize the
                        trend over the artist’s identity (apart from these two below and few others) and I started to
                        learn
                        <strong>music production and sound engineering</strong>. I never would’ve realized I was able to
                        make music
                        seriously if I didn’t see <strong>close people reaching music industry</strong> milestones at
                        giant steps.
                    </p>

                    I have been gracefully assisted by senior producers and took advice from every single tip and
                    feedback mentioned, and I got affiliated to a recording studio closeby, KMC. I had to create beats
                    for artists(mostly rappers), but none of them had the formula to be sucessful (and sometimes the
                    talent), but of course I learned everything I could out of any song produced for KMC.
                    <br><br>
                    In the meantime, I tried to get some views on YouTube:
                    <br><br>
                    https://www.youtube.com/watch?v=KFDOPRpJdXw&ab_channel=SARACHE
                    <br><br>
                    This was the first video that got a bit notorious (and the first one to appear in my public YouTube
                    channel). Probably because I learned Miley’s song quite fast and be one of the first Wrecking Ball
                    cover videos to be uploaded.
                    <br><br>
                    Then comes the city kids area. This was a song I prepared acoustically called City Kids, based in a
                    Tumblr post I saw back then, saying “We are the kids your mama warned you about”. I wanted to take
                    that sentence and give it a new sense, allowing myself to talk about the urban life me and my
                    friends experienced since we were kids, like binge drinking beers in a park just before the police
                    appears and we take off like a Tesla rocket, or craving the most luxurious accessories while
                    stealing a 2€ nose piercing.
                    <br><br>
                    https://www.youtube.com/watch?v=CHUAYtEmxaA&ab_channel=SARACHE
                    <br><br>
                    https://www.youtube.com/watch?v=RKyYmL3clhs&ab_channel=SARACHE
                    <br><br>
                    Alongside City Kids comes No Necklace,
                    <br><br>
                    Also I love making covers, completely different from their initial vibe:
                    <br><br>
                    https://www.youtube.com/watch?v=94_1AF6y5dc&ab_channel=SARACHE

                    https://www.youtube.com/watch?v=m4nURXgKF6U&ab_channel=SARACHE

                    https://www.youtube.com/watch?v=Dg6ajR93G0o&ab_channel=SARACHE

                    https://youtube.com/watch?v=gyKcYzjn1Rk&ab_channel=SARACHE

                    https://www.youtube.com/watch?v=QcobdkDaghs&ab_channel=SARACHE
                    <br><br>
                    <p>
                        After Sarache’s YouTube era, I noticed I was lacking artist managing, as I was promoting myself
                        everywhere I went, but I didn’t have access to audience catalyst stones (playlist curators,
                        radio
                        hosts, artist representatives, higher-rated artists…)
                        <br><br>
                        So I took my best writing style and emailed Chronic Records, indie label specialized in urban,
                        reggae, dancehall and good vibing all the time. That way, not only I could get my songs and
                        releases
                        promoted, but also my songs would be in <strong>Spotify & other platforms</strong> (I was a
                        Deezer user back
                        then)!!! This was an utopic thought 5 years earlier, but look at it now!
                        <br><br>
                        https://open.spotify.com/intl-es/artist/4XCZxaDlFIQnZf8m1WaQd8?si=YJRPA8vKSvCJLmhEZF11Zw
                        <br><br>
                        Chronic Records kindly answered me noticing my involvement and engagement in my music and booked
                        me
                        to their catalog.
                        <br><br>
                        At start, I was hoping a major label would sign me to get massive numbers and promotion, but I
                        was
                        not aware of all the implications, knowing that you are not your music owner.
                    </p>
                </template>
            </cardwindow>


        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            cardJourney: {
                title: "Design process",
                titlecontent: "My typical design journey",
                contenttitle: "Customcard title",
                designJourneyMap: [
                    {
                        title: "Discover",
                        child: [
                            {
                                title: "Stakeholder Side",
                                content: ["Kick-off session", "Requirement definition", "Research Roadmap"],
                            },
                            {
                                title: "User Side",
                                content: ["Survey to target users", "Contextual enquires", "Behavioral analysis"],
                            },
                        ],
                    },
                    {
                        title: "Identify",
                        child: [
                            {
                                title: "Design Challenge",
                                content: ["Working session", "DC definition", "How Might We?"],
                            },
                            {
                                title: "Who?",
                                content: ["User Persona", "Empathy Map", "Service Blueprint"],
                            },
                        ],
                    },

                    {
                        title: "Ideate",
                        child: [
                            {
                                title: "Design Challenge",
                                content: ["Affinity Mapping", "Behavioral Analysis"],
                            },
                            {
                                title: " ",
                                content: ["Design Workshop", "Sitemap", "Card sorting"],
                            },
                        ],
                    },

                    {
                        title: "Produce",
                        child: [
                            {
                                title: "Interface",
                                content: ["Branding", "Wireframing", "Design System ops", "Prototyping", "Visual Assets", "Designworkflow"],
                            },
                            {
                                title: "Dev Handoff",
                                content: ["Library check-in", "Agile rituals", "Retrospective", "Prototyping", "Daily stand-ups", "Sprint"],
                            },
                        ],
                    },

                    {
                        title: "Share & Promote",
                        child: [
                            {
                                title: "Share",
                                content: ["Executive/ Usability Deck", "Documentation", "Design deliverables"],
                            },
                            {
                                title: "Promote",
                                content: ["Motion graphics", "Mock-ups", "Demo videos"],
                            },
                        ],
                    },

                    {
                        title: "Evaluate",
                        child: [
                            {
                                title: "Testing",
                                content: ["Usability Testing", "Heatmap", "Feedback gathering"],
                            },
                            {
                                title: "Promote",
                                content: ["Agile board management", "Functionality workshops", "Design review sessions"],
                            },
                        ],
                    },
                ],
            },
        }
    },
    methods: {},
}
</script>
<!-- [] {}  ""  :  \ /  -->
<style lang="scss" scoped>
h1 {
    margin-bottom: 2rem;
}

.aboutcontent {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
}

.stepProcess {
    display: flex;
    gap: 1rem;
    padding: 0 0.25rem;
}

.journeycontent {
    text-align: center;
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>
