const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("adventure")
    .setDescription("Replies with island info!")
    .addStringOption((option) =>
      option
        .setName("island")
        .setDescription("The name of adventure island")
        .setRequired(true)
        .addChoices(
          { name: "Asura", value: "Asura" },
          { name: "Drumbeat", value: "Drumbeat" },
          { name: "Forpe", value: "Forpe" },
          { name: "Harmony", value: "Harmony Island" },
          { name: "Lagoon", value: "Lagoon" },
          { name: "Lush Reed", value: "Lush Reed" },
          { name: "Medeia", value: "Medeia" },
          { name: "Monte", value: "Monte" },
          { name: "Oblivion", value: "Oblivion" },
          { name: "Opportunity", value: "Opportunity" },
          { name: "Phantomwing", value: "Phantomwing" },
          { name: "Snowpang", value: "Snowpang" },
          { name: "Tranquil", value: "Tranquil" },
          { name: "Volare", value: "Volare" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("reward")
        .setDescription("The reward of adventure island")
        .setRequired(true)
        .addChoices(
          { name: "Gold", value: ":gold:966985332442664960" },
          { name: "Card Pack", value: ":cardpack:966985332543356938" },
          { name: "Silver", value: ":silver:966985332534960128" },
          { name: "Pirate Coin", value: ":piratecoin:966985332530765875" }
        )
    ),
  async execute(interaction) {
    const island = interaction.options.getString("island");
    const reward = interaction.options.getString("reward");
    await interaction.reply({
      allowedMentions: { roles: ["966659062064357436"] },
      content: `<@&${"966659062064357436"}>, ${island} Island has <${reward}> reward today!`,
    });
  },
};
