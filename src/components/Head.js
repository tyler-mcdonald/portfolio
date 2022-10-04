import { Helmet, HelmetProvider } from "react-helmet-async";

export const Head = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tyler McDonald</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="../css/main.css" />
        <script
          src="https://kit.fontawesome.com/4971fd3e37.js"
          crossorigin="anonymous"
        />
      </Helmet>
    </HelmetProvider>
  );
};
