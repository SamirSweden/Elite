import Link from "next/link";
import { Comment } from "../types/Comment";
import Header from "../components/shared/header/Header";

async function getComments(): Promise<Comment[]> {
  const response = await fetch(`${process.env.API_COMMENT}/comments`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`${response.status}`);

  const data = await response.json();
  return data.comments;
}

export default async function Comments() {
  const comments = await getComments();

  return (
    <>
    <Header />
      <section className="!h-screen bg-black !py-10 px-0">
        <div className="max-w-7xl !mx-auto w-full h-full px-6 ">
          <div className="grid grid-cols-4 gap-5">
            {comments.map((comment) => (
              <a
                key={comment.id}
                className="  hover:bg-white/65 text-white
                            relative
                        !py-5 !px-5 bg-white rounded-2xl "
              >
                <h4 className="text-black text-2xl ">
                    <Link href="/" className={'hover:text-white'}>{comment.body}</Link>
                </h4>
                <span className="text-lg  absolute top-[-10px] right-0  text-white rounded-2xl !px-1.5 !py-0.5  bg-linear-to-br from-[#c1089f] to-[#41062f]">👍{comment.likes}</span>
                <div className="!mt-12">
                    <h2 className="absolute  bottom-0 left-[10px] text-black mt-auto !pt-10 text-sm capitalize">{comment.user.fullName}</h2>
                </div>
            </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
