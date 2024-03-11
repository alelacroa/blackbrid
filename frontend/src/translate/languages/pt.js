const messages = {
  pt: {
    translations: {
      signup: {
        title: "Regístrate",
        toasts: {
          success: "Usuario creado con éxito. ¡Inicia sesión ahora!",
          fail: "Error al crear usuario. Verifica los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Iniciar sesión",
        form: {
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Entrar",
          register: "¡Regístrate ahora!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Agendamientos",
          enabled: "Habilitadas",
          disabled: "Deshabilitadas",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "R$",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "Empresa creada con éxito",
        },
      },
      auth: {
        toasts: {
          success: "Inicio de sesión exitoso",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "Conexión con WhatsApp eliminada con éxito",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Estás seguro? Deberás escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Agregar WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrate de que tu celular esté conectado a internet e inténtalo de nuevo, o solicita un nuevo código QR",
          },
          qrcode: {
            title: "Esperando lectura del código QR",
            content:
              "Haz clic en el botón 'CÓDIGO QR' y escanea el código QR con tu celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida",
          },
          timeout: {
            title: "Se perdió la conexión con el celular",
            content:
              "Asegúrate de que tu celular esté conectado a internet y WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Predeterminado",
          sendIdQueue: "Cola",
          timeSendQueue: "Redirigir a la cola en X minutos",
          queueRedirection: "Redirección de Cola",
          queueRedirectionDesc:
            "Selecciona una cola para redirigir a los contactos que no tengan una cola asignada",
          prompt: "Prompt",
          maxUseBotQueues: "Enviar bot X veces",
          timeUseBotQueues: "Intervalo en minutos entre envíos de bot",
          expiresTicket: "Cerrar chats abiertos después de X minutos",
          expiresInactiveMessage: "Mensaje de cierre por inactividad",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito",
      },
      qrCode: {
        message: "Lee el código QR para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "Contacto eliminado con éxito",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          importTitlte: "Importar contactos",
          deleteMessage:
            "¿Estás seguro de que quieres eliminar este contacto? Se perderán todas las atenciones relacionadas.",
          importMessage: "¿Quieres importar todos los contactos del teléfono?",
        },
        buttons: {
          import: "Importar Contactos",
          add: "Agregar Contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          actions: "Acciones",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "Contenido JSON",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversación",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "Integración probada con éxito",
          addSuccess: "Integración agregada con éxito",
          editSuccess: "Integración editada con éxito",
        },
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "Clave de API",
          max_messages: "Máximo de mensajes en el Historial",
          voiceKey: "Clave de voz de la API",
          voiceRegion: "Región de voz",
        },
        success: "Prompt guardado con éxito",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Cola",
          max_tokens: "Máximo de tokens en la respuesta",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de WhatsApp",
          email: "Correo electrónico",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          whatsapp: "Conexión de origen: ",
        },
        buttons: {
          addExtraInfo: "Agregar información adicional",
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado exitosamente.",
        },
        queueModal: {
        title: {
          add: "Agregar fila",
          edit: "Editar fila",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Mensaje de revisión",
          token: "Token",
          orderQueue: "Orden de fila (Bot)",
          integrationId: "Integración",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        },
        userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          profile: "Perfil",
          whatsapp: "Conexión estándar"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado exitosamente",
        },
        scheduleModal: {
        title: {
          add: "Nueva Agenda",
          edit: "Editar Agenda",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de agenda",
          sentAt: "Fecha de envío",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        success: "Agenda guardada exitosamente",
        },
        tagModal: {
        title: {
          add: "Nueva etiqueta",
          edit: "Editar etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada exitosamente",
        },
        chat: {
        noTicketMessage: "Seleccione un ticket para iniciar el chat",
        },
        uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
          titleFileList: "Lista de archivo(s)"
        },
        },
        ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
        },
        ticketsQueueSelect: {
        placeholder: "Filas",
        },
        tickets: {
        toasts: {
          deleted: "El servicio en el que estabas ha sido eliminado",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abierto" },
          closed: { title: "Resuelto" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Servicio de búsqueda y mensajes",
        },
        buttons: {
          showAll: "Todos",
        },
        },
        transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escribe para buscar usuarios",
        fieldQueueLabel: "Transferir a la fila",
        fieldQueuePlaceholder: "Seleccione una fila",
        noOptions: "No se encontraron usuarios con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
        },
        ticketsList: {
        pendingHeader: "En Espera",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "¡Nada aquí!",
        noTicketsMessage:
          "No se encontró ningún servicio con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          reopen: "Reabrir"
        },
        },
        newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escriba para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Agregar",
          cancel: "Cancelar",
        },
        },
        mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Tickets",
          quickMessages: "Respuestas rápidas",
          contacts: "Contactos",
          queues: "Filas & Chatbot",
          tags: "Etiquetas",
          administration: "Administración",
          users: "Usuarios",
          settings: "Configuraciones",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Agendas",
          campaigns: "Campañas",
          announcements: "Comunicaciones",
          chats: "Chat Interno",
          financiero: "Financiero",
          files: "Lista de archivos",
          prompts: "Open.Ai",
          queueIntegration: "Integraciones",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Salir",
          },
        },
        },
        queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          lastUpdate: "Última actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! y será eliminado de las colas y conexiones vinculadas",
        },
        },
        files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        toasts: {
          deleted: "Lista eliminada exitosamente",
          deletedAll: "Todas las listas se han eliminado correctamente",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Eliminar todos",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar todos",
          deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
          deleteAllMessage: "¿Está seguro de que desea eliminar todas las listas?",
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre de archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "Ninguna notificación.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "Sin adjunto",
        confirmationModal: {
          deleteTitle: "Eliminación",
          deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?",
        },
        buttons: {
          add: "Agregar",
          attach: "Adjuntar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "Atajo agregado con éxito.",
          deleted: "Atajo eliminado con éxito.",
        },
        dialog: {
          title: "Mensaje Rápido",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir visión",
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Nombre del Archivo",
          status: "Estado",
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no puede revertirse.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo Electrónico",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo Electrónico",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no puede revertirse.",
          importMessage: "¿Desea importar los contactos de esta hoja de cálculo?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          status: "Estado",
          scheduledAt: "Programada para",
          completedAt: "Completada",
          confirmation: "Confirmación",
          actions: "Acciones",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Solo Lectura",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Programada para",
            confirmation: "Confirmación",
            contactList: "Lista de Contacto",
            tagList: "Lista de Etiquetas",
            fileList: "Lista de Archivos"
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparos",
            restart: "Reiniciar Disparos",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no puede revertirse.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado",
        },
      },
      announcements: {
        active: 'Activo',
        inactive: 'Inactivo',
        title: "Anuncios",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nuevo Anuncio",
          contactLists: "Listas de Anuncios",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estado",
          actions: "Acciones",
        },
        dialog: {
          edit: "Edición de Anuncio",
          add: "Nuevo Anuncio",
          update: "Actualizar Anuncio",
          readonly: "Solo Lectura",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estado",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no puede revertirse.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
      },
      queues: {
        title: "Colas y Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de Bienvenida",
          actions: "Acciones",
          orderQueue: "Orden de la cola (bot)",
        },
        buttons: {
          add: "Agregar Cola",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Está seguro? ¡Esta acción no puede revertirse! Las atenciones en esta cola seguirán existiendo, pero ya no tendrán una cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Colas",
      },
      users: {
        title: "Usuarios",
        table: {
          name: "Nombre",
          email: "Correo Electrónico",
          profile: "Perfil",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Usuario",
        },
        toasts: {
          deleted: "Usuario eliminado con éxito.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Las atenciones abiertas por este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "Centro de Ayuda",
      },
      schedules: {
        title: "Agendamientos",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres eliminar este Agendamiento?",
          deleteMessage: "Esta acción no puede revertirse.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Agendamiento",
          sentAt: "Fecha de Envío",
          status: "Estado",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Agendamiento eliminado con éxito.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres eliminar esta Etiqueta?",
          deleteMessage: "Esta acción no puede revertirse.",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros Etiquetados",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito.",
        },
      },
      settings: {
        success: "Configuraciones guardadas con éxito.",
        title: "Configuraciones",
        settings: {
          userCreation: {
            name: "Creación de Usuario",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Volver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje",
        placeholderClosed:
          "Reabra o acepte este ticket para enviar un mensaje.",
        signMessage: "Firmar",
      },
      contactDrawer: {
        header: "Datos del contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otra información",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre de la lista de archivos",
          message: "Detalles de la lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con el archivo",
          extraValue: "Valor de la opción",
        },
        success: "Lista de archivos guardada con éxito.",
      },
      ticketOptionsMenu: {
        schedule: "Agendamiento",
        delete: "Eliminar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Inserte aquí la información que desea registrar",
        },
        confirmationModal: {
          title: "Eliminar el ticket del contacto",
          message:
            "¡Atención! Todas las mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Aceptar",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Eliminar mensaje?",
          message: "Esta acción no se puede deshacer.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudo descargar medios de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Por favor, inténtelo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicie sesión.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuario ha sido deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tiene permisos para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al buscar el mensaje en WhatsApp, quizás sea muy antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };
