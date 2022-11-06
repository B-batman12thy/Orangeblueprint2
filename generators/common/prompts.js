function askForTshirtSizes(meta) {
    const applicationType = this.applicationType;
        const prompts = [
            {
                when: response => applicationType === 'microservice',
                type: 'list',
                name: 'smtp',
                message:
                    'voulez-vous utilisez le serveur de messagerie smtp',
                choices: [
                    {
                        value: 'oui',
                        name: 'oui'
                    },
                    {
                        value: 'non',
                        name: 'non'
                    },
                   
                ],
                default: 'oui'
            }
        ];

        if (meta) return PROMPTS; // eslint-disable-line consistent-return
        const done = this.async();
        this.prompt(prompts).then(props => {
            this.tshirtSize = props.tShirtSize;
            done();
        });
}
