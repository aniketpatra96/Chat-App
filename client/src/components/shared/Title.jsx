import { Helmet } from "react-helmet-async";

const Title = ({ title = "Chat", description = "Chat App made by ProDevs" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
