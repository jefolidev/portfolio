import tourism1 from "../assets/tourism/background/tourism-main.png";
import tourism2 from "../assets/tourism/background/tourism-other-pics.png";
import tourism3 from "../assets/tourism/background/tourism-unique.png";

export function TurismoProjectPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={tourism1} />
      <span className="font-maven text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil
        quaerat maiores cum provident aliquid, laboriosam consequuntur, expedita
        cupiditate eaque officiis magni, atque fugit nobis quidem cumque?
        Cumque, temporibus in?
      </span>
      <img src={tourism2} />
      <span className="font-maven text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi,
        asperiores aspernatur tempora reiciendis atque, blanditiis aut, quos
        iste vel nulla assumenda laudantium consectetur rerum ullam libero
        quasi. Voluptatem, ratione.
      </span>
      <img src={tourism3} />
      <span className="font-maven text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quasi
        distinctio! Iure corrupti, perferendis aliquam aut optio quia mollitia
        laborum dolor. Perferendis ratione nisi incidunt eum, accusamus porro
        quia commodi?
      </span>
    </div>
  );
}
