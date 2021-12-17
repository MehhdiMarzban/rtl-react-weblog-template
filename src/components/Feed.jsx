import { Container } from "@mui/material";
import { makeStyles} from "@mui/styles";
import {  } from "@mui/icons-material";
import Post from "./Post";

const useStyle = makeStyles(theme => {
	return {
		
	}
});
function Feed() {

    const classes = useStyle();

    return (
        <Container>
          <Post />
          <Post />
          <Post />
          <Post />
        </Container>
    );
}

export default Feed;
