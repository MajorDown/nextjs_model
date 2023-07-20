import Article from "@/components/Article";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h2>Page d'accueil</h2>
      <Article title="Premier article">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem?
        </p>
        <Image src="/pc.jpg" alt="image d'un pc" width={500} height={300} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
          temporibus totam ex provident deserunt. Repellendus pariatur sint
          commodi dolorem soluta ea beatae recusandae assumenda numquam,
          perspiciatis, accusamus laboriosam voluptates officiis in eius iusto,
          excepturi temporibus. Cumque dolore aut nostrum.
        </p>
      </Article>
      <Article title="Deuxième article">
        <Image src="/RWS.jpg" alt="image du studio" width={500} height={300} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
          temporibus totam ex provident deserunt. Repellendus pariatur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore id
          dignissimos dolores culpa blanditiis sapiente sequi quis est! Deleniti
          ea dolor corporis suscipit aliquam. Maiores optio deserunt voluptas
          pariatur aspernatur, ipsam delectus dolor ea totam qui molestias sint
          eum hic consectetur error vitae omnis fuga. Veniam cupiditate
          obcaecati maiores aut reiciendis non ratione tempore, repellendus,
          iure, minima numquam fuga?
        </p>
      </Article>
      <Article title="Troixième article">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
          temporibus totam ex provident deserunt. Repellendus pariatur. Lorem.
        </p>
        <Image
          src="/frequence.png"
          alt="image des fréquence"
          width={500}
          height={200}
        />
      </Article>
    </section>
  );
}
