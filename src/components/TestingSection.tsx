import FadeInWhenVisible from "./FadeInWhenVisible";

export default function TestingSection() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <FadeInWhenVisible>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Testing &amp; Quality Assurance
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Committed to shipping high-quality, reliable code through comprehensive testing strategies.
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col gap-8">
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Jest",
                desc: "For robust unit and integration testing of JavaScript code.",
              },
              {
                title: "React Testing Library",
                desc: "To ensure components work as users expect them to.",
              },
              {
                title: "Cypress",
                desc: "For reliable end-to-end testing in a real browser.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 p-5 rounded-xl border border-gray-200 bg-white/50 shadow-sm"
              >
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-900 text-white font-mono text-sm shadow-md">
            <p className="text-gray-400">&gt; running tests...</p>

            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Button.test.tsx:</span> renders the main button correctly
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Form.test.tsx:</span> displays validation errors on invalid submit
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Api.test.tsx:</span> fetches and displays data from the API
            </p>

            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Navbar.test.tsx:</span> renders navigation links correctly
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Modal.test.tsx:</span> opens and closes when triggered
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Dropdown.test.tsx:</span> shows and hides menu on toggle
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">Tabs.test.tsx:</span> switches tabs when clicked
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-gray-400">useLocalStorage.test.tsx:</span> stores and retrieves values correctly
            </p>

            <p className="text-green-400 mt-2">All tests passed.</p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
