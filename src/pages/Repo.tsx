import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../@types/Repos";

export const Repo = () => {
  const params = useParams();
  const currentRepo = params["*"] as string;

  const queryClient = useQueryClient();

  const handleChangeDescription = async () => {
    //await queryClient.invalidateQueries(["repos"]); remove cache time from a useQuery request
    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    if (previousRepos) {
      const newRepos = previousRepos?.map((repo) => {
        if (repo.full_name === currentRepo) {
          return { ...repo, description: "Testando" };
        } else {
          return repo;
        }
      });

      queryClient.setQueryData("repos", newRepos);
    }
  };

  return (
    <div>
      <button onClick={handleChangeDescription}>Change Description</button>
    </div>
  );
};
