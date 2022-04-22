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
          { name: "Gold", value: "gold" },
          { name: "Card Pack", value: "card pack" },
          { name: "Silver", value: "silver" },
          { name: "Pirate Coin", value: "pirate coin" }
        )
    ),
  async execute(interaction) {
    const island = interaction.options.getString("island");
    const reward = interaction.options.getString("reward");
    await interaction.reply({
      allowedMentions: { roles: ["966659062064357436"] },
      content: `<@&${"966659062064357436"}>, ${island} has ${reward} reward today!`,
    });
  },
};
