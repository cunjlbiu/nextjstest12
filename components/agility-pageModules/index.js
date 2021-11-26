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
import ImageCarouselWithText from "./ImageCarouselWithText"

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "TextBlockWithImage", module: TextBlockWithImage },
  { name: "Heading", module: Heading },
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

];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
