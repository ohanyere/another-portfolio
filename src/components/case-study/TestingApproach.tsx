import { motion } from "framer-motion";
import StaggerSection from "../StaggerSection";
import { fadeUp } from "../../animations/variants";

export default function TestingApproach() {
  const tools = [
    {
      name: "Jest",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAisO4RhFX302el_K1jGZJ9JxZttfSqMZpnQ9wA5FfmLNjctRIViityiuKDx8UhctAuqRrmLBQ5S0g32B-d0HF6EUpQVfi_Rwe7t0cfWZpJt2kFJmh_up51Ct009Ap01Gxbx-fdOpiKQki_DzWK0kzPYp5a4_kZCMhyVpkyjMQTQTlBk4Lu1pJKdGzg5-joqmLw7wdZTeKPcnAEulEiUYKRYeMu5Tzwcu-vXM9kxjyan0O7CSwF99TD6azwsR6hAsEFoAIhox2DItAa",
    },
    {
      name: "React Testing Library",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUMYni1qHAIltiBX0gMZvxf0rBHBwSszVm6bseaIoEykHWMTum_WpYOPKdeni8C1HOSbD0Rmgz5R1_yQntszyybcDdnb562oQ1_6uqmlHWgIZQH7SPeH16v8VYl6FpYA16veioCm5EKsEJA9y3kjgcTxEm5nZVkh8TCC5a1uCQFzX1uRLuAxXt4ijw97NdVfV__Sz8HU2th5dpXhveddNdpLQqhevmjs1_TDei-SLQ0upQhdUPDkaVS7bOZ2lob8owCmdflIwGZZH7",
    },
    {
      name: "Cypress",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb6RCN5-r6zKMGdLZaNqZVNfnqhOPlMJtnA3FP_-NRr4nHQt8NWvyAroSyCYVLtAjHMnYTC9pXxVHA9vFTxaCbxvqMgkglhqVJCcc5Ir-VerVNScbaPy5gb75g14zzJ_o0EXUqn2O1ryK0KKtRwe0k-5QTOjJpb3i1YmsohwBexBZ656dDMeM2Cr-j8pSA0A3YloMA3LRzv-HI-GWHfXEfi9FdqP3yY23I5nXAWgmtgtjHZSpDydrXUh0sdRVPH-st6xwPnMO247b3",
    },
  ];

  return (
    <StaggerSection>
      <motion.section variants={fadeUp} className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold px-4 pb-4">
          Testing Approach
        </h2>

        <p className="text-text-muted-light text-base md:text-lg leading-relaxed mb-6 px-4">
          A comprehensive testing strategy was employed, combining unit, integration,
          and end-to-end tests to ensure application stability and reliability.
        </p>

        <div className="flex flex-wrap gap-4 px-4">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={fadeUp}
              className="flex items-center gap-2 bg-background-light py-2 px-4 rounded-full border border-border-light"
            >
              <img src={tool.logo} alt={tool.name} className="h-5 w-5" />
              <span className="text-sm font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </StaggerSection>
  );
}
