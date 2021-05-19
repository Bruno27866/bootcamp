import Appointmnet from '../models/Appointment';
import {isEqual} from 'date-fns';

class AppointmentRepository {
  private appointments: Appointmnet[];

  constructor(){
    this.appointments =[];
  }

  public findByDate(date: Date): Appointmnet | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual (date, appointment.date),
      );

      return findAppointment || null;
  }

  public create (provider: string, date: Date): Appointmnet {
    const appointment = new Appointmnet(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
