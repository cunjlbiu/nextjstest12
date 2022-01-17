import RichTextArea from "./RichTextArea";
import FeaturedPost from "./FeaturedPost";
import PostsListing from "./PostsListing";
import PostDetails from "./PostDetails";
import Heading from "./Heading";
import TextBlockWithImage from "./TextBlockWithImage";
import GoalsListing from "./GoalsListing";
import TwoColumnTextWithImage from "./TwoColumnTextWithImage"
import TeamMembersListing from "./TeamMembersListing"
import ImageRowsWithTitle from "./ImageRowsWithTitle"
import Testimonials from "./Testimonials"
import TitledList from "./TitledList"
import SingleTitle from "./SingleTitle"
import Separator from "./Separator"
import ImageCarouselWithText from "./ImageCarouselWithText"
import resttest from "./resttest"
import Registration from "./Registration"
import HomeHeading from "./HomeHeading";


// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "TextBlockWithImage", module: TextBlockWithImage },
  { name: "resttest", module: resttest },
  { name: "Registration", module: Registration },
  { name: "Heading", module: Heading },
  { name: "Separator", module: Separator },
  { name: "SingleTitle", module: SingleTitle },
  { name: "TitledList", module: TitledList },
  { name: "FeaturedPost", module: FeaturedPost },
  { name: "PostsListing", module: PostsListing },
  { name: "PostDetails", module: PostDetails },
  { name: "RichTextArea", module: RichTextArea },
  { name: "GoalsListing", module: GoalsListing },
  { name: "TwoColumnTextWithImage", module: TwoColumnTextWithImage},
  { name: "TeamMembersListing", module: TeamMembersListing },
  { name: "ImageRowsWithTitle", module: ImageRowsWithTitle},
  { name: "Testimonials", module: Testimonials},
  { name: "ImageCarouselWithText", module: ImageCarouselWithText},
  { name: "HomeHeading", module: HomeHeading},

];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  console.log("WOT WOT WOT   " + JSON.stringify(obj))
  return obj.module;
};
