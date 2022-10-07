import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Repository } from "../@types/Repos";

export const Repos = () => {
  const { data, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const res = await axios.get(
        "https://api.github.com/users/ViniBGoulart/repos"
      );

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <div>
      {isFetching && <p>Loading</p>}
      {data?.map((repo) => {
        return (
          <li>
            <Link to={`/repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
            <hr />
          </li>
        );
      })}
    </div>
  );
};
