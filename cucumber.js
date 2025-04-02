module.exports = {
    default: {
        require: ["./step-definitions/*.ts", "./support/hooks.ts"],  // Ubicación de los step definitions y hooks
        requireModule: ["ts-node/register"],  // Permite ejecutar TypeScript
        format: ["progress-bar"],  // Formato de salida en la terminal
        publishQuiet: true,  // Evita mostrar mensajes innecesarios
        //paths: ["features/*.feature"],  // Ubicación de los archivos .feature
    },
};
