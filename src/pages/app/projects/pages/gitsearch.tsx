import github1 from "../assets/git-searcher/background/git-first.png";
import github2 from "../assets/git-searcher/background/git-main.png";
import github3 from "../assets/git-searcher/background/git-repo.png";

export function GitHubProjectPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={github1} />
      <span className="font-maven text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil
        quaerat maiores cum provident aliquid, laboriosam consequuntur, expedita
        cupiditate eaque officiis magni, atque fugit nobis quidem cumque?
        Cumque, temporibus in?
      </span>
      <img src={github2} />
      <span className="font-maven text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi,
        asperiores aspernatur tempora reiciendis atque, blanditiis aut, quos
        iste vel nulla assumenda laudantium consectetur rerum ullam libero
        quasi. Voluptatem, ratione.
      </span>
      <img src={github3} />
      <span className="font-maven text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quasi
        distinctio! Iure corrupti, perferendis aliquam aut optio quia mollitia
        laborum dolor. Perferendis ratione nisi incidunt eum, accusamus porro
        quia commodi?
      </span>
    </div>
  );
}
