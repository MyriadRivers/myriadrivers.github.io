import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import mainImage from "./sewsustainable.png";
import logicModelImage from "./logic_model.png";
import garmentSelectionImage from "./garment_selection.png";
import outfitImage from "./outfitting.png";
import upcycleImage from "./upcycle.png";
import disposalImage from "./disposal.png";

const title: string = "SewSustainable";
const dateRange: string = "Mar–Apr 2023";
const links: Array<{ text: string, url: string }> = [
    { text: "Figma", url: "https://www.figma.com/file/SyeAAZQ1fwMlubLZ7tzdog/Ed-Tech-Project-Prototype?type=design&node-id=0-1&mode=design" }
];
const tags: Array<ProjectTag> = [
    ProjectTag.uiux
];
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <Image src={mainImage} />
                <p>
                    SewSustainable is a hypothetical educational app meant to help people practice more sustainable fashion.
                </p>
                <p>
                    Team: Jason Gao, Marissa Gardner, Naz Ozturk, Spencer Kim
                </p>
            </>
    },
    {
        shortTitle: "Problem",
        title: "Problem",
        summary: "The fashion industry is a major polluter. Sustainable fashion is about responsibility on both consumer and manufacturing sides",
        contents:
            <>
                <p>
                    The fashion industry is a major contributor to global climate change, as measured in tons of Carbon Dioxide Equivalents (CO2eq) [1].
                    Besides ecological effects such as massive water consumption and production of harmful microplastics, the industry also employs
                    hundreds of millions of people worldwide [2], many of whom work in sweatshop conditions.
                </p>
                <p>
                    Sustainable fashion, as measured by certifications such as the EU Ecolabel and OEKO-TEX Made in Green label [3], should broadly be:
                </p>
                <ol>
                    <li><b>Environmentally friendly:</b> How are garments sourced and manufactured, and how is waste managed?</li>
                    <li><b>Long lasting:</b> Does the garment maintain dimensions and color? Does the garment resist damage from prolonged wear?</li>
                    <li><b>Socially responsible:</b> How are workers treated throughout the garment's supply chain?</li>
                </ol>
            </>
    },
    {
        shortTitle: "Research",
        title: "Research",
        summary: "Preliminary research surveyed literature about sustainable attitudes and education, as well as existing sustainable fashion technologies",
        contents:
            <>
                <h3>Literature</h3>
                <p>
                    Benetta and Hill showed that consumers primarily associated sustainable fashion with reusing and upcycling clothes,
                    and less so with sustainable sourcing and ethical manufacturing. Similarly, while most surveyed consumers are willing to
                    upcycle, they lack the specific knowledge on how [4].
                </p>
                <p>
                    McNeill and Moore identified three fashion consumer archetypes:
                </p>
                <ul>
                    <li><b>Self:</b> Prioritizes style, cost, and convenience. No considerations for sustainability.</li>
                    <li><b>Sacrifice:</b> Prioritizes sustainability. Limits consumption altogether.</li>
                    <li><b>Social:</b> Aware and mindful of sustainability, but still desires style and cost convenience.</li>
                </ul>
                <p>
                    The third group was deemed most likely to be influenced by greater sustainability education [5].
                </p>
                <p>
                    Ma found a Challenge Based Learning (CBL) approach effective in teaching sustainability to fashion students
                    through engaging in actual practice with stakeholders, peers, and instructors, improving metacognition [6].
                </p>
                <h3>Technology</h3>
                <p>
                    Bransford et al. establishes four interrelated perspectives on designing learning environments which strategies used by
                    existing sustainable fashion technologies can be broadly sorted into [7]:
                </p>
                <p>
                    <b>Learner-Centered: </b>Focuses on the unique perspectives, culture, and backgrounds of each learner.
                    Platforms such as <i>Good On You</i> incorporate into existing learners' lives by allowing them to evaluate
                    the sustainability of brands that they actively shop at.
                </p>
                <p>
                    <b>Knowledge-Centered: </b>Focuses on building the knowledge base of the learner. Platforms such as
                    <i> Recleau</i>, <i>Threads,</i> and Google's <i>Your Plan, Your Planet</i> offer facts and articles on
                    sustainable practices, allowing learners to accumulate knowledge.
                </p>
                <p>
                    <b>Assessment-Centered: </b>Focuses on feedback to enhance metacognition, reflection, and self-correction
                    for learners. Platforms such as <i>Your Plan, Your Planet</i> let learners pick choices, and then give immediate
                    feedback and facts depending on if the selection was correct.
                </p>
                <p>
                    <b>Community-Centered: </b>Focuses on building a welcoming and mutually beneficial community of learners. Platforms
                    such as H&M's <i>Loooptopia</i> take a gamified approach that build virtual communities of learners who can share
                    experiences and resources.
                </p>
            </>
    },
    {
        shortTitle: "Design",
        title: "Design",
        summary: "The app takes a narrative, gamified approach while attempting to avoid common pitfalls in similar designs",
        contents:
            <>
                <p>
                    Following our research, we directed our app design towards users in the "Social" group outlined by McNeill and
                    Moore—those who understood the importance of sustainability but also still desired to be fashionable and cost
                    effective, often lacking the knowledge to make specific sustainable decisions.
                </p>
                <Image src={logicModelImage} caption={`Initial logic model detailing possible features, 
                measurements, and activities for the learning environment.`} />
                <p>
                    During our ideation phase, we took a divergent approach and brainstormed multiple different modalities for
                    our platform, including a narrative like <i>Threads</i> that can explain better explain the manufacturing sides of
                    sustainability, a game that would teach users how to mend and upcycle clothing, and a gallery walkthrough that would
                    tie knowledge to garments with a focus on styles that appealed to the user—as aesthetics are a primary factor when purchasing
                    clothes for many consumers.
                </p>
                <p>
                    Gamification is often incorporated through "BLAP" gamification—using external motivators like Badges, Leaderboards,
                    Achievements, and Points to encourage users. However, when these facets are removed, the motivation to continue
                    an activity can also disappear, as they do not produce an intrinsic desire to engage in the taught behaviors.
                    Moreover, they can actively harm long-term motivation when in real situations there are no BLAP motivators, making
                    the taught activities even less interesting in comparison [8].
                </p>
                <p>
                    We decided to take a narrative, gamified approach that would both be more engaging than strict knowledge-based
                    articles while also providing more room for metacognition and transfer of learned principles by simulating a
                    realistic scenario [7]. We avoid use of BLAPs, instead focusing on a narrative with choice and experimentation,
                    in line with Nicholson's guidelines for meaningful gamification [8].
                </p>
            </>
    },
    {
        shortTitle: "Walkthrough",
        title: "Walkthrough",
        summary: "Learners go through the lifecycle of a garment from source, to purchase, to wear, to final disposal",
        contents:
            <>
                <p>
                    Learners are first presented with a short introduction to the app outlining the global problem of sustainable
                    fashion and the three components of environmental impact, longevity, and social responsibility that can be
                    used to evaluate garments.
                </p>
                <p>
                    Learners are then given a set budget and the ability to browse and purchase clothes,
                    presented similarly to an online shop.
                </p>
                <h3>Garment Selection</h3>
                <Image src={garmentSelectionImage} caption={`""Shop" for clothes, 
                while also getting detailed information on garment materials and brand sustainability.`} />
                <p>
                    The freedom to choose and create your own outfit takes a <b>learner-centered</b> approach by
                    accommodating different users' aesthetic tastes and personal values in allowing them to buy
                    garments, whether that be focusing on cost, style, or sustainability.
                </p>
                <p>
                    Different garments come from different sources and can range from cheaper fast fashion brands,
                    more expensive sustainable brands, designer brands, and unknown brands such as those purchased from a
                    thrift store.
                </p>
                <p>
                    Depending on the garment selected, learners get a rundown of the sustainability of the brand,
                    based on brand analysis by <i>Good On You</i>, as well as the condition and durability of the materials,
                    which they must consider in addition to its looks and price. Details on brands and materials take a
                    <b> knowledge-centered</b> approach to informing learners in the realistic context of shopping for clothes.
                </p>
                <h3>Outfitting</h3>
                <p>
                    After selecting some garments, learners can then mix and match to create their own outfits.
                </p>
                <Image src={outfitImage} caption={`Try on their clothes with AR and see them change over time.`} />
                <p>
                    The app leverages augmented reality to show how the garments look on the learner's body,
                    similar to trying clothes out in the changing room. Being able to create your own outfits and see them
                    on your body introduces elements of play and experimentation found in actual clothes shopping,
                    connecting the sustainable practices taught to real life in an engaging manner.
                </p>
                <p>
                    In addition, learners can also progress time to simulate prolonged wear and washing.
                    Holes, tears, stains, discoloration, and dimensional changes can start to alter the way the clothes looks.
                </p>
                <p>
                    The original garment affects how the clothes changes over time. Cheaper fast-fashion brands can wear out
                    faster than more durable garments, while thrifted clothes can start with initial damage or fit poorly on
                    the learner's body.
                </p>
                <h3>Upcycling</h3>
                <p>
                    At any point in time as the garment's lifecycle progresses, learners can select parts of the clothes
                    they aren't satisfied with—whether its the ends of pants being too short, a stain on a shirt,
                    or a torn seam.
                </p>
                <Image src={upcycleImage} caption={`Learn about different ways to alter or 
                mend their clothes, while seeing the results in AR.`} />
                <p>
                    Learners are the given different options on how to handle these cases—they can mend the clothes,
                    leave it as-is for style or to save costs, or simply dispose of the garment.
                </p>
                <p>
                    Mending clothes presents costs and short tutorials on how to do it so learners can actually practice
                    the techniques on real clothes. It also presents an AR preview of how the result could look on their garment.
                    By showing both the budget decreasing and the clothes changing according to the selected repair, the
                    app provides immediate formative feedback, letting users reflect on their repair decisions and
                    showing that repaired clothes can be fashionable.
                </p>
                <h3>Disposal and Recap</h3>
                <p>
                    Whether the garment has become too damaged to further repair, the learner is out of money, or they
                    simply decide to throw their garment away, eventually it's time to dispose of the clothes.
                </p>
                <Image src={disposalImage} caption={`Garment disposal links local community resources. 
                An analysis is presented based on all game decisions.`} />
                <p>
                    In this case, the app again provides the user with different choices based on their preferences,
                    as well as considerations for each choice. Donating the garment is an option if it's not
                    significantly worn out. Recycling at a dedicated plant can garments avoid landfills. Repurposing
                    the fabric is also possible—e.g. transforming the garment into a mop or pillowcase.
                </p>
                <p>
                    In each case, the app provides resources on how to repurpose the clothes or resources on donation
                    centers or recycling plants that can handle the materials near the user. In this way, SewSustainable
                    takes a <b>community-centered</b> approach by attempting to foster greater involvement in learners'
                    local communities.
                </p>
                <p>
                    Finally, the app provides a recap of all the decisions the learner made throughout the garment's life,
                    explaining how much money they spent and potentially saved versus other options, how long their clothes lasted,
                    and how they impacted the environment and workers based on statistics for the resources and labor
                    needed to produce one article of clothing. This form of summative assessment, in addition to the formative
                    feedback of visual cues in the app, takes a <b>assessment-centered</b> approach to get learners to
                    think about their actions and reflect, helping to internalize sustainability concepts.
                </p>
            </>
    },
    {
        shortTitle: "Evaluation",
        title: "Evaluation & Future Work",
        summary: "System was evaluated via an app walkthrough with 9 users and a summative assessment of learning",
        contents:
            <>
                <p>
                    In a survey of 9 university students ages 17–22, learners reported low initial knowledge on sustainable
                    fashion practices, but after being walked through the app were able to successfully name and explain
                    sustainable fashion concepts in relative detail. Users found the AR time-lapse of the garment
                    especially helpful, getting them to think not just about how the clothes would look on them at the
                    date of purchase but also years into the future, bringing a more farsighted perspective to clothes shopping.
                </p>
                <p>
                    Future work for SewSustainable could include the ability to share outfits with friends, allowing users to show
                    off their mended clothes and building a greater community of clothing menders and sustainable shoppers.
                    Community-centered environments are vital in getting learners to engage with new experiences and continue
                    self-motivated learning [7], and can help motivate users to put their clothing mending skills into actual practice.
                </p>
                <p>
                    The app could also be redesigned to present the knowledge-heavy components, such as the initial brand reviews,
                    in a more accessible and less text dense manner. Showing three identical style pants except for material
                    and the way they change over time simultaneously could teach users about material differences in a more natural
                    setting, and visualizing the amount of labor and natural resources that go into each brand's manufacturing
                    can also make comparison and takeaways easier.
                </p>
            </>
    },
    {
        shortTitle: "References",
        title: "References",
        summary: "Sources referenced",
        contents:
            <>
                <ol className={"references"}>
                    <li>
                        World Economic Forum, "Net-Zero Challenge:
                        The supply chain opportunity Insight Report January 2021", World Economic Forum, 2022.
                    </li>
                    <li>
                        International Labour Organization, "How to achieve gender equality in global garment supply chains",
                        International Labour Organization, 2023
                    </li>
                    <li>
                        EU ECOLABEL TEXTILE PRODUCTS, User Manual, 2nd ed. European Commission , 2019.
                    </li>
                    <li>
                        K. Bennetta and J. Oeppen Hill, “Educating for change?: An investigation into consumers’
                        perception of sustainability and the educational drivers needed to support sustainable consumption,”
                        International Journal of Fashion Design, Technology and Education, vol. 15, no. 3,
                        2022. doi:10.1080/17543266.2022.2083694
                    </li>
                    <li>
                        L. McNeill and R. Moore, “Sustainable fashion consumption and the fast fashion conundrum:
                        Fashionable consumers and attitudes to sustainability in clothing choice,” International Journal
                        of Consumer Studies, vol. 39, no. 3, 2015. doi:10.1111/ijcs.12169
                    </li>
                    <li>
                        J. J. Ma, “Development of education for Sustainable Fashion Design using a
                        challenge-based learning approach,” International Journal of Fashion Design,
                        Technology and Education, vol. 16, no. 2, 2022. doi:10.1080/17543266.2022.2137249
                    </li>
                    <li>
                        J. D. Bransford, A. L. Brown, and R. R. Cocking, How People Learn:
                        Brain, Mind, Experience, and School. Washington, DC: National Academy Press, 2004.
                    </li>
                    <li>
                        S. Nicholson, “A RECIPE for Meaningful Gamification,” Gamification in Education and Business,
                        2015. doi:10.1007/978-3-319-10208-5_1
                    </li>
                </ol>
            </>
    }
]

const SewSustainable: Project = {
    title: title,
    dateRange: dateRange,
    links: links,
    tags: tags,
    sections: sections
}

export default SewSustainable;

