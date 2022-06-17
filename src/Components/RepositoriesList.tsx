import { useState } from "react";
import { useSelector } from "../Hooks/useTypedSelector";
import { useActions } from "../Hooks/useActions";
import { Button, Input, InputGroup, Stack, ListItem, ListIcon, Box, UnorderedList } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  }

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search for a repository"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <Button
            type="submit"
            isLoading={loading}
            isDisabled={loading}
            variant="outline"
            >
            Search
          </Button>
        </InputGroup>
      </form>
      {error && <Box>{error}</Box>}
      {data && (
        <Stack spacing={4}>
          <UnorderedList>
            {data.map((repository) => (
              <ListItem key={repository}>
                <ListIcon as={MdCheckCircle} />
                {repository}
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
      )}
    </Box>
  );
}

export default RepositoriesList;
