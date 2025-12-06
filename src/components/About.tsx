import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
  return (
    <section className="py-16 sm:py-20 px-4" id="about">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeInWhenVisible>
          <div className="w-full max-w-sm mx-auto md:max-w-none">
            <img
              className="w-full h-auto rounded-xl object-cover aspect-square shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgZVhd7UtLhp5rDizrCIya3DtfiZ6fpz-YTnZDbI3FphPgSki1jFEGF2N4gthwWv_kTq0NxsYtE7FAaeGPrsqTxK4MW22umvJKqy9nIB4r1N56nvFjh2shGko9SLnvDHKh9E3uqSi1Z-wZu1FT4iN3EBYnpWGF0zKy97w6Br8i7X_M2VWFcx325w4ajnapMVFQEQmUV-fbjnA4UA_c_a2ZNQjTYN8smV5ASgDp7hcsgBigZYn7F9ZDlH4XEDkqpxKVkR8363xeyOAj"
              alt="Portrait"
            />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              I'm a frontend engineer with a deep passion for creating beautiful,
              functional, and user-centered digital experiences. I specialize in building
              scalable and maintainable applications using TypeScript and modern frameworks
              like React and Next.js. My focus is on delivering exceptional UI/UX,
              ensuring every interface is both intuitive and performant. I'm also
              fascinated by the potential of AI and am actively exploring ways to
              integrate intelligent features into user interfaces.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
