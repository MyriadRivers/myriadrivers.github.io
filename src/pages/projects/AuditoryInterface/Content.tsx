import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import interfaceImage from "./interface.png";
import diagramImage from "./figure_diagram.png";
import angleImage from "./angle_diagram.png";
import example1Video from "./example_1.mov";
import example2Video from "./example_2.mov";

const title: string = "Artistic Swim Audio UI";
const dateRange: string = "Jan–May 2021";
const links: Array<{ text: string, url: string }> = [];
const tags: Array<ProjectTag> = [
    ProjectTag.uiux
];
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <Image src={interfaceImage} />
                <p>
                    A hypothetical auditory interface to help synchronized swimmers train their figures.
                </p>
            </>
    },
    {
        shortTitle: "Motivation",
        title: "Motivation",
        summary: "Sound has unique affordances over graphics especially when visual attention is busy",
        contents:
            <>
                <p>
                    Graphical User Interfaces (GUIs) are ubiquitous information displays, but there are many cases in which visual displays are unideal
                    or infeasible. GUIs are good at presenting lots of information to the user at once and communicating spatial relationships,
                    but they demand the user's visual attention, making them suboptimal for tasks in which visual attention is demanded elsewhere.
                </p>
                <p>
                    Audio Interfaces, owing to the nature of sound as a temporal medium, are very effective in communicating changes and patterns
                    over time, while simultaneously freeing the eyes to focus on other things. An example would be a speech interface helping users
                    cook a dish—the user is free to focus on preparation and cooking without having to constantly check a recipe on their phone,
                    which would occupy both their eyes and their hands.
                </p>
                <p>
                    This hypothetical audio interface helps athletes train, letting them focus on their sport while also providing useful,
                    aggregate information in real time.
                </p>
            </>
    },
    {
        shortTitle: "Scenario",
        title: "Scenario",
        summary: "Synchronized swimming figures require detailed attention to body angles and extensions",
        contents:
            <>
                <p>
                    Synchronized Swimming is a sport that requires extreme coordination and control of the body. A <b>figure</b> is a movement
                    that a swimmer must perform. Figures are made up of individual positions, acting as the atomic component from which complete routines
                    are built.
                </p>
                <p>
                    As outlined by World Aquatics (formerly FINA), positions are judged based on factors such as:
                </p>
                <ul>
                    <li>Extension of limbs.</li>
                    <li>Angle of limbs.</li>
                    <li>Elevation of the body above the water.</li>
                </ul>
                <p>
                    Practicing figures often involves recording videos of yourself going through different figures,
                    reviewing the footage, and the going back to correct the angles, extensions, or other problems shown in the footage. Coaches will also
                    often shout out problems for swimmers to fix, acting as real-time feedback allowing swimmers to adjust in the water.
                </p>
                <Image src={diagramImage} caption={`Example judging criteria for a figure, source: FINA Artistic Swimming Figures Manual 2022–2025`} />
                <p>
                    Because visual attention is important for coordinating the body in the pool at different orientations, especially in groups, the
                    hypothetical interface uses sound to display the various angle, extension, and elevation data of the body, letting swimmers practice
                    on their own without having to constantly stop and record videos of themselves.
                </p>
            </>
    },
    {
        shortTitle: "Research",
        title: "Research",
        summary: "Surveyed swimmers expressed the difficulties of learning new figures for routines",
        contents:
            <>
                <p>
                    Besides domain research in rules and regulations, I also conducted some user research with synchronized swimmers reached through the r/synchronizedswimming
                    online community on Reddit, asking about current problems when practicing, current solutions taken by users, challenges in the sport, pain points,
                    and unmet needs.
                </p>
                <p>
                    In responses from 8 athletes ranging from local to international levels, users described problems such as:
                </p>
                <ul>
                    <li>Intuitively learning new figures ("sometimes what it looks like and feels like are totally different.")</li>
                    <li>Position in a formation ("there's definitely been times where I didn't realize I was out of position until I saw video")</li>
                    <li>Keeping track of all the body parts ("Being corrected for some body positions, such as lifted ribs or arched back may help")</li>
                </ul>
                <p>
                    To these ends, the audio interface aims to be a noninvasive and intuitive cognitive aid, helping athletes keep track of all the different
                    aspects of their body during technical figure practice.
                </p>
            </>
    },
    {
        shortTitle: "Design",
        title: "Design",
        summary: "A continuous sonification changes timbre in relation to the athlete's body",
        contents:
            <>
                <h3>Representing Body Parts</h3>
                <p>
                    The hypothetical interface keeps track of five primary points on the athlete's body: the two arms, the two legs, and the shoulders.
                    The interface measures both the angle of these points—the legs and shoulders being calculated from the hips, and the arms from the
                    shoulders—as well as the extension, being whether a limb is tucked in/bent or extended straight outwards. The interface also
                    tracks the elevation of the body in respect to the surface of the water.
                </p>
                <Image src={angleImage} caption={`Measurements taken by the interface, figure image source: FINA Artistic Swimming Figures Manual 2022–2025`} />
                <p>
                    The audio interface provides sound feedback directly into the athlete's ears, in the manner of an in-ear monitor.
                    Each of limbs corresponds to a tone with a different pitch and location in the stereo field, that when played together
                    form a euphonic major chord:
                </p>
                <ul>
                    <li><b>Left Arm: </b>Highest note in the chord, a perfect 5th above the root. Panned hard left.</li>
                    <li><b>Right Arm: </b>Second highest not in the chord, a major 3rd above the root. Panned hard right.</li>
                    <li><b>Shoulders: </b>Root note, panned center.</li>
                    <li><b>Left Leg: </b>Second lowest note in the chord, a perfect 4th below the root. Panned hard left.</li>
                    <li><b>Right Leg: </b>Lowest note in the chord, a minor 6th below the root. Panned hard right.</li>
                </ul>
                <p>
                    This provides a natural mapping where sounds in the ears correspond to limbs on the same side of the body, and higher register sounds
                    correspond to limbs higher on the body (hands), while lower register sounds correspond to lower body parts (feet). Notes panned to
                    the same side are different registers and scale degrees, making them easier to tell apart.
                </p>
                <h3>Evaluating a Figure</h3>
                <p>
                    Figures are judged based largely on angles, elevations, and other technical aspects of the body. This means that there is an ideal pose for
                    every figure, which would get the max score. The sonification tracks this by knowing both the "correct" position for each limb, and the current
                    position.
                </p>
                <p>
                    <b>Angles: </b>In addition to a set pitch and stereo panning, each limb's tone also has a variable timbre. Based on the difference between the current angle
                    and the correct angle, the tone mixes between a bright, salient sawtooth wave (when the angles are maximally different) to a gentle sine (wave
                    when the correct angle and the current angle are the same).
                </p>
                <p>
                    <b>Extensions: </b>The difference between the correct extension and the current extension maps to the volume of the limb's tone.
                    The greater the difference, the quieter the tone.
                </p>
                <p>
                    <b>Elevation: </b>The elevation of the body controls the entire pitch of the chord. While the interface starts as an A major chord,
                    as the body sinks the pitch of the chord also drops noticeably in register.
                </p>
                <p>
                    <b>Position: </b>The interface also optionally keeps track of the swimmer's position in the formation when doing group practice.
                    Straying too far away from the desired position prompts an automated voice reminding the athlete to move back in the respective correct direction.
                </p>
            </>
    },
    {
        shortTitle: "Demo",
        title: "Demo",
        summary: "Examples simulating how the interface would work",
        contents:
            <>
                <p>
                    The ideal pose always sounds like an A major chord made of only sine tones. The voicing of the chord depends on
                    which body parts are needed in the figure, as not all the parts of the body are judged in every figure.
                </p>
                <p>
                    After a swimmer is familiarized with what the sonifications represent, they can keep track of their body by listening to the tones:
                    Harsh sawtooth tones mean a limb's angle is wrong, and as they fix it the tone turns back into a smooth sine wave. An unbalanced sound with
                    one of the ears too quiet represents that a limb is likely not fully extended. If the chord suddenly shifts downwards, a swimmer knows
                    that they have to work on raising their body more out of the water.
                </p>
                <p>
                    In this way, so long as the sound is gentle, balanced major chord, a swimmer can mostly ignore the euphonic drone, but when something goes wrong,
                    the sound becomes more salient, reminding the athlete to fix their position.
                </p>
                <p>
                    To evaluate the design of the hypothetical interface, I developed a simulator to manually change each of the sounds corresponding to the
                    limbs. In this way, I could use a Wizard-of-Oz approach to testing where I personally observed participants and manipulated the simulator
                    in real time to mimic the system sensing the limbs and reacting automatically.
                </p>
                <h3>Example 1</h3>
                <Video src={example1Video} caption="Ariana Figure professional demo, source: @SwimEngland, YouTube" />
                <p>
                    The above example is a very accurate execution of the "Ariana" figure, with sonification manually configured on the simulator. As figures are
                    movements composed of multiple positions, each position is represented by a "keyframe" in the interface that represents the target limb angles
                    and extensions at a certain step in the movement:
                </p>
                <ol>
                    <li>
                        First, the torso moves downwards. The shoulder tone changes to a sawtooth wave to signify the torso's new target position,
                        and the slowly changes to a sine wave once the swimmer matches her torso to that target.
                    </li>
                    <br />
                    <li>
                        Next, the left leg's target angle changes by 180 degrees. This can be heard first in the simulator through the sawtooth tone.
                        Once again, the tone goes back to a sine wave as the swimmer moves gradually moves her leg to meet the position.
                    </li>
                    <br />
                    <li>
                        The right leg's target now changes to match that of the left leg. Again, first the simulator notifies the swimmer of the target change,
                        and then the change is executed and the sound stabilizes.
                    </li>
                    <br />
                    <li>
                        Finally, the torso moves back upwards to a position level with the surface.
                    </li>
                </ol>
                <p>
                    In this example, slight buzzing can be heard as the legs vary from the ideal 180 degrees perfect split for a moment around the 0:30
                    mark. Because the variation is so small, the sound is barely noticeable, and generally the figure is executed flawlessly.
                </p>
                <h3>Example 2</h3>
                <Video src={example2Video} caption="Flamingo position novice demo, source: YouTube" />
                <p>
                    The above example is a novice execution of the "Flamingo" position. Besides the extra buzzing of other tones besides the target right
                    leg, indicating other limbs going slightly out of their ideal held positions, the entire chord can also be heard dropping in register
                    as the swimmer's body sinks below the surface. Changes in extension can also be heard through the right leg tone,
                    which drops in volume when the leg should be tucked in and extended out, and rises again when the swimmer moves her body to match
                    the target extensions at those points.
                </p>
            </>
    },
    {
        shortTitle: "Evaluation",
        title: "Evaluation",
        summary: "The simulator was evaluated with proxy tasks for participants to mimic synchronized swimming",
        contents:
            <>
                <p>
                    Finding synchronized swimmers in my vicinity to test the system with, especially as it was during the COVID pandemic,
                    proved very difficult. Thus, I tested the simulator with non-swimmer participants by performing proxy tasks.
                </p>
                <p>
                    The system was first evaluated by quizzing users wearing earbuds on a series of events of increasing complexity. Configurations of the simulator
                    were played to users, first starting with only one limb different from the target angle, and later ending with multiple limbs at different
                    degrees of variance from the target angle and different extensions.
                    Participants were asked to report what limbs they thought needed to be changed and how for each of these events. This was to test how
                    easily discernable and understandable the sonifications were.
                </p>
                <p>
                    Next, participants went through a series of events where I slowly adjusted the simulator in real time, and they had to react by changing their
                    body positions to match. For instance, I would first move a "target angle" knob for an arm, and then the standing participant
                    would try to change their body (rotating outstretched arms) to match based off the the sonification.
                    As they approached the correct angle I would watch them and manually move the respective "current angle" knob. In this way,
                    I tested the how easily participants could respond to the interface and make minute adjustments in realtime.
                </p>
                <p>
                    I also showed participants the two demo videos above, first without sonification and the with sonification, and asked them after each time
                    to describe what they noticed, and whether their awareness was effected by the added sounds. This was to get qualitative information on
                    how the interface might improve awareness of details.
                </p>
                <p>
                    Finally, participants were asked to complete the NASA Task Load Index survey assessing the perceived difficulty, physical, and cognitive strain
                    in using the system.
                </p>
                <p>
                    Generally, participants could follow most events, but more complex multi-limb events were harder to discern with high accuracy.
                    Extension was also harder to judge, as the decrease in volume made the changes harder to detect.
                </p>
                <p>
                    Future evaluation with actual
                    synchronized swimmers and a way to change the simulator more accurately in response to movements, rather than relying on my manual
                    reaction to participants, would allow for a more robust evaluation of the utility of the system. Some mappings, such as the extension to
                    volume, or swapping the registers of the arms and legs, since most times synchronized swimmers are upside down, would also benefit the
                    interface.
                </p>
            </>
    }
]

const content: Project = {
    title: title,
    dateRange: dateRange,
    links: links,
    tags: tags,
    sections: sections
}

export default content;

