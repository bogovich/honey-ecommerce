import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";

const CustomBreadCrumbs = () => {
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const routes = [
    {
      path: "/products/:categorySlug/:productSlugAndId",
      breadcrumb: ({ match }) => {
        if (isLoading) {
          return null;
        }
        const parts = match.params.productSlugAndId.split("-");
        const id = parts.pop();
        const thisProduct = products.filter((product) => product.id === id)[0];
        return thisProduct ? thisProduct.title.en : null;
      },
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  const boobbubmp = breadcrumbs.map(({ match, breadcrumb }) => {
    return (
      <Link
        underline="hover"
        color="inherit"
        key={match.pathname}
        component={RouterLink}
        to={match.pathname}
      >
        {breadcrumb}
      </Link>
    );
  });
  if (breadcrumbs.length === 1 && breadcrumbs[0].location.pathname === "/")
    return null;
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<FontAwesomeIcon icon={faChevronRight} size="sm" color="primary" />}
        aria-label="breadcrumb"
      >
        {boobbubmp}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadCrumbs;
