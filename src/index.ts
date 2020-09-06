import prompts from "prompts";
import handler from "./utils/handler";
import { questions } from "./utils/questions";

(async () => {
  try {
    const args = process.argv.slice(2);
    if (args.length === 2) {
      const [option, data] = args;
      await handler(option, data);
    } else {
      const { option, data } = await prompts(questions);
      await handler(option, data);
    }
  } catch (err) {
    return err;
  }
})();
